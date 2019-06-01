pragma solidity >=0.4.21 <0.6.0;

// A proposal for random issue
// --> SHA256(2bits from MSB of block number after some interval) % 50

contract Lottery {
    address public owner;                           // Address of contract owner
    uint private reward;                                    // Amount of money that will be given to winner of lottery
    uint private _head;                             // head index for queue
    uint private _tail;                             // tail index for queue
    mapping(uint => BettorInfo) private bets;       // self made queue for saving bettors' information
    uint constant BET_AMOUNT = 0.005 ether;         // bet amount will be fixed, may be changed
    uint constant BLOCK_INTERVAL = 256;
    
    enum LotteryState {opened, closed}
    LotteryState state;

    event BET(uint index, address payable bettor_address, uint amount, uint[5] numbers);
    event CHECKBET(uint index, address payable bettor_address, uint amount, uint[5] numbers);


    constructor() public {
        owner = msg.sender;
        state = LotteryState.closed;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You are not owner");
        _;
    }

    modifier IsLotteryOpen {
        require(state == LotteryState.closed, "Lottery is open now");
        _;
    }

    modifier IsLotteryClose {
        require(state == LotteryState.opened, "Lottery is closed now");
        _;
    }

    struct BettorInfo {
        address payable bettor_address;
        uint amount;
        uint[5] numbers;
    }


    // Start the lottery
    function OpenLottery() IsLotteryClose onlyOwner public returns (bool) {
        state = LotteryState.opened;
        return true;
    }

    // End the lottery
    function CloseLottery() IsLotteryOpen onlyOwner public returns (bool) {
        state = LotteryState.closed;
        return true;
    }

    // Return current reward
    function GetReward() public view returns (uint) {
        return reward;
    }

    // function for betting
    // 무엇으로 배팅을 할건지를 바탕으로 param이 정해져야함
    function Bet(uint[5] memory betting_numbers) public payable returns (bool) {
        // check correct bet amount
        require(msg.value == BET_AMOUNT, "Not Enough ETH");
        
        // push the bet to the queue
        bets[_tail].bettor_address = msg.sender;
        bets[_tail].amount = msg.value;
        for(uint i=0; i < 5; i++) {
            bets[_tail].numbers[i] = betting_numbers[i];
        }
        _tail++;
        
        // event log
        emit BET(_tail - 1, bets[_tail-1].bettor_address, bets[_tail-1].amount, bets[_tail].numbers);
        return true;
    }

    // function for distributing the reward
    // 베팅의 결과를 확인하는 function
    // 한 사람이 여러 값을 배팅했다면 한번에 확인할 수 있도록 이벤트를 찍어주도록 할 것
    function Distribute() public {
        // win

        // lose

        // draw

        // pop from bet queue
    }

    // address, betting information, timestamp?
    function GetMyBetinfo() public returns (bool) {
        for(uint i=_head; i<_tail; i++) {
            if(bets[i].bettor_address == msg.sender) {
                emit CHECKBET(i, bets[i].bettor_address, bets[i].amount, bets[i].numbers);
                return true;
            }
        }
        return false;
    }



    // event log를 통해 현재 배팅한 사람들의 배팅정보를 볼 수 있는 함수
    function ShowAll() onlyOwner public returns (bool) {

    }
    
    function random() private view returns (uint8) {
        //return uint8(uint256(keccak256(block.timestamp)) % 50);
    }
    
    function () external payable { }
    
}
