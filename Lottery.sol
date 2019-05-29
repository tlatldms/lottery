pragma solidity >=0.4.21 <0.6.0;

// A proposal for random issue
// --> SHA256(2bits from MSB of block number after some interval) % 50

contract Lottery {
    address public owner;                           // Address of contract owner
    uint reward;                                    // Smount of money that will be given to winner of lottery
    uint private _head;                             // head index for queue
    uint private _tail;                             // tail index for queue
    mapping(uint => BettorInfo) private bets;       // self made queue for saving bettors' information
    uint constant BET_AMOUNT = 0.005 ether;         // bet amount will be fixed, may be changed

    enum LotteryState {opened, closed}
    LotteryState state;

    constructor() public {
        owner = msg.sender;
        state = LotteryState.closed;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You are not owner");
        _;
    }

    modifier IsLotteryOpen {
        require(state == LotteryState.close);
        _;
    }

    modifier IsLotteryClose {
        require(state == LotteryState.opened);
        _;
    }

    struct BettorInfo {
        address payable bettor_address;

        // what to submit?
        
    }


    // Start the lottery
    function openLottery() IsLotteryClose onlyOwner public returns (bool) {
        state = LotteryState.opened;
        return true;
    }

    // End the lottery
    function closeLottery() IsLotteryOpen onlyOwner public returns (bool) {
        state = LotteryState.closed;
        return true;
    }

    // Return current reward
    function getReward() public returns (uint) {
        return reward;
    }

    // function for betting
    // 무엇으로 배팅을 할건지를 바탕으로 param이 정해져야함
    function betting() public returns (bool) {
        // check correct bet amount
        require(msg.value == BET_AMOUNT, "Not Enough ETH");
        
        // push the bet to the queue

        // event log

    }

    // function for distributing the reward
    // 베팅의 결과를 확인하는 function
    // 한 사람이 여러 값을 배팅했다면 한번에 확인할 수 있도록 이벤트를 찍어주도록 할 것
    function distribute() public {
        // win

        // lose

        // draw

        // pop from bet queue
    }

    // address, betting information, timestamp?
    function get_my_betinfo() public returns () {

    }


    function push_bet() internal returns (bool) {

    }

    function pop_bet() internal returns (bool) {

    }

    // event log를 통해 현재 배팅한 사람들의 배팅정보를 볼 수 있는 함수
    function show_all() public returns () onlyOnwer{

    }

}