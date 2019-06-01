pragma solidity >=0.4.21 <0.6.0;


contract Lottery {
    address public owner;                           // Address of contract owner
    uint private reward;                            // Amount of money that will be given to winner of lottery
    uint private _head;                             // head index for queue
    uint private _tail;                             // tail index for queue
    mapping(uint => BettorInfo) private bets;       // self made queue for saving bettors' information
    uint constant BET_AMOUNT = 0.005 ether;         // bet amount will be fixed, may be changed
    //uint constant BLOCK_INTERVAL = 256;
    
    enum LotteryState {opened, closed}
    LotteryState state;

    event BET(uint index, address payable bettor_address, uint amount, uint[6] numbers);
    event CHECKBET(uint index, address payable bettor_address, uint amount, uint[6] numbers);


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
        uint[6] numbers;
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

    function Bet(uint[6] memory betting_numbers) public payable returns (bool) {
        // check correct bet amount
        require(msg.value == BET_AMOUNT, "Not Enough ETH");
        
        // push the bet to the queue
        bets[_tail].bettor_address = msg.sender;
        bets[_tail].amount = msg.value;
        for(uint i=0; i < 6; i++) {
            bets[_tail].numbers[i] = betting_numbers[i];
        }
        _tail++;
        reward += msg.value;
        // event log
        emit BET(_tail-1, bets[_tail-1].bettor_address, bets[_tail-1].amount, bets[_tail-1].numbers);
        return true;
    }

    // function for distributing the reward
    // if true, there is winner, if false, there is no winner
    function Distribute() onlyOwner IsLotteryClose public returns (bool){
        uint[6] memory answer = random();
        // address payable winner_address;
        address payable winner_address;
        uint flag;
        bool retval;
        
        // win
        for(uint i=_head; i<_tail; i++) {
            flag = 0;
            for(uint j=0; j<6; j++){
                if(bets[i].numbers[j] != answer[j]) break;
                else flag++;
            }
            if(flag == 6) {
                winner_address = bets[i].bettor_address;
            }
        }
        
        if(winner_address == address(0)) {
            retval = false;
        } else {
            winner_address.transfer(reward);
            retval = true;
        }

        // clear bet queue
        for(uint i=_head; i<_tail; i++) {
            delete bets[i];
        }
        _head = 0;
        _tail = 0;
        return retval;
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
    function ShowAll() onlyOwner public {
        for(uint i=_head; i<_tail; i++) {
            emit CHECKBET(i, bets[i].bettor_address, bets[i].amount, bets[i].numbers);
        }
    }
    
    function random() private view returns (uint[6] memory) {
        //return uint8(uint256(keccak256(block.timestamp)) % 50);
    }
    
    function () external payable { }
    
}
