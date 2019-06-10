pragma solidity >=0.4.21 <0.6.0;

interface ERC20 {
   function totalSupply() external view returns (uint256);
   function balOf(address who) external view returns (uint256);
   function allowance(address owner, address spender) external view returns (uint256);
   function transfer(address to, uint256 value) external returns (bool);
   function approve(address owner, address spender, uint256 value) external returns (bool);
   function transferFrom(address _from, address to, uint256 value, address buyer) external returns (bool);
   event Transfer(address indexed _from, address indexed buyer, uint256 value);
   event Approval(address indexed owner, address indexed spender, uint256 value); 
}

contract LotteryToken is ERC20 {
   string public name = "Lottery Token";
   string public symbol = "LTK";
   uint8 public decimals = 0;
   address payable public Owner;
   uint256 totalToken;

    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) shared;

    constructor() public {
        Owner = msg.sender;
        symbol = "LTK";
        name = "Lottery";
        decimals = 0;
        totalToken =  (2**256) - 1;
        balances[Owner] = totalToken;
    }
    
    function getOwner() view public returns (address payable) {
        return Owner;
    }

    function totalSupply() external view returns (uint256){
        return totalToken;
    }

    function balOf(address who) external view returns (uint256){
        require(who != address(0));
        return balances[who];
    }

    function allowance(address owner, address spender) external view returns (uint256){
        return shared[owner][spender];
    }

    function transfer(address to, uint256 value) external returns (bool){
        require(to != address(0));
        require(value <= balances[msg.sender]);
        balances[msg.sender] -= value;
        balances[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function approve(address owner, address spender, uint256 value) external returns (bool) {
        require(spender != address(0));
        shared[owner][spender] = value;

        emit Approval(owner, spender, value);
        return true;
    }

    function transferFrom(address _from, address to, uint256 value, address buyer) external returns (bool){
        require(to != address(0));
        require(value >= 0 && value <= 2^256-1 && value <= balances[_from]);
        require(value <= shared[_from][buyer]);
        balances[_from] -= value;
        shared[_from][buyer] -= value;
        balances[buyer] += value;

        emit Transfer(_from, buyer, value);
        return true;
    }

    event Transfer(address indexed _from, address indexed buyer, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

}


contract Lottery {
    address payable public owner;                   // Address of contract owner
    uint private reward;                            // Amount of money that will be given to winner of lottery
    uint private _head;                             // head index for queue
    uint private _tail;                             // tail index for queue
    mapping(uint => BettorInfo) private bets;       // self made queue for saving bettors' information
    uint BET_AMOUNT = 1;           // bet amount will be fixed, may be changed
    //uint constant BLOCK_INTERVAL = 256;
    enum LotteryState {opened, closed}
    LotteryState public nowState;

    LotteryToken token;
    uint256 public rate;
    uint public answer1;
    uint public answer2;
    uint public answer3;
    uint public answer4;
    uint public answer5;
    uint public answer6;
    
    uint public bet1;
    uint public bet2;
    uint public bet3;
    uint public bet4;
    uint public bet5;
    uint public bet6;
    
    

    address public nowLoginAddr;
	string public nowLoginName;
    string public nowLoginId;
    uint256 public nowBalance;
    
    

    address public TestBuyer;
   event BET(uint index, address payable bettor_address, uint amount, uint[6] numbers);
    event CHECKBET(uint index, address payable bettor_address, uint amount, uint[6] numbers);

    
    struct User {
        string username;
        string password;
        address userAddress;
        
    
    }
    
    mapping (string => User) Client;

   
    constructor(LotteryToken _LotteryToken, uint256 _rate) public {
        //BEFORE : owner = _LotteryToken.getOwner();
    owner=msg.sender;
    nowState = LotteryState.closed;
      token = LotteryToken(_LotteryToken);
      rate = _rate;
      _head = 0;
      _tail = 0;
       token.approve(token.getOwner(), owner, 100000000000);
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You are not owner");
        _;
    }
    
    modifier notOwner {
        require(msg.sender != owner, "Contract owner cannot bet");
        _;
    }

    modifier IsLotteryOpen {
        require(nowState == LotteryState.opened, "Lottery is open now");
        _;
    }

    modifier IsLotteryClose {
        require(nowState == LotteryState.closed, "Lottery is closed now");
        _;
    }
    struct BettorInfo {
        address payable bettor_address;
        uint amount;
        uint[6] numbers;
        
        
    }
    
    function initialize_answer() public {
        answer1 = 0;
        answer2 = 0;
        answer3 = 0;
        answer4 = 0;
        answer5 = 0;
        answer6 = 0;
    }
    
    function initialize_betnumbers() public {
        bet1 = 0;
        bet2 = 0;
        bet3 = 0;
        bet4 = 0;
        bet5 = 0;
        bet6 = 0;
    }
    
    

    function stringsEqual(string storage _a, string memory _b) internal view returns (bool) {
        bytes storage a = bytes(_a);
        bytes memory b = bytes(_b);
        if (a.length != b.length)
        return false;
        // @todo unroll this loop
        for (uint i = 0; i < a.length; i ++)
        if (a[i] != b[i])
        return false;
        return true;
    }
    
    function Register(string memory name, string memory id,string memory password) notOwner public {
        require(Client[id].userAddress == address(0) );
        Client[id].username=name;
        Client[id].password=password;
        Client[id].userAddress=msg.sender;
        GetApproval();
    }

    
    function Login(string memory id, string memory password) public returns(bool) {
        require(msg.sender == Client[id].userAddress && stringsEqual(Client[id].password, password));
        nowLoginAddr=msg.sender;
        nowLoginName=Client[id].username;
        nowLoginId=id;
        initialize_betnumbers();
        
    }    
    
    function Logout() public {
        nowLoginAddr=address(0);
        nowLoginName='';
        nowLoginId='';
        nowBalance=0;
    }
    
    function checkBalance(address addr) public {
        nowBalance=token.balOf(addr);
    }

   // Token
   function BuyToken(address buyer) notOwner public payable {
        require(msg.value > 0 ether);
        TestBuyer=buyer;
        token.transferFrom(owner, msg.sender, msg.value * rate / 1 ether, buyer);
    }

    
    function GetApproval() public {
        token.approve(token.getOwner(), msg.sender, 1000);
        token.approve(msg.sender, token.getOwner(), 1000);
    }
    
    function withdraw(uint256 value) public payable onlyOwner {
        owner.transfer(value);
    }
    
    
    // Start the lottery
    function OpenLottery() IsLotteryClose onlyOwner public returns (bool) {
        nowState = LotteryState.opened;
        initialize_answer();
        return true;
    }

    // End the lottery
    function CloseLottery() IsLotteryOpen onlyOwner public returns (bool) {
        nowState = LotteryState.closed;
        return true;
    }

    // Return current reward
    function GetReward() public view returns (uint) {
        return reward;
    }


    function Bet(address bettor, uint[6] memory betting_numbers) IsLotteryOpen notOwner public payable returns (bool) {
        // check correct bet amount
        require(token.balOf(bettor) >= BET_AMOUNT, "Not Enough Token");
        token.transferFrom(bettor, msg.sender, BET_AMOUNT, owner);
        //token.transfer(owner, BET_AMOUNT);
        
        // push the bet to the queue
        bets[_tail].bettor_address = msg.sender;
        bets[_tail].amount = BET_AMOUNT;
        for(uint i=0; i < 6; i++) {
            bets[_tail].numbers[i] = betting_numbers[i];
        }
        _tail++;
        reward += BET_AMOUNT;
        // event log
        emit BET(_tail-1, bets[_tail-1].bettor_address, bets[_tail-1].amount, bets[_tail-1].numbers);
        return true;
    }

    // function for distributing the reward
    // if true, there is winner, if false, there is no winner
    function Distribute() onlyOwner IsLotteryClose public returns (bool){
        uint[6] memory answer = random();
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
            // winner_address.transfer(reward);
            token.transferFrom(owner, msg.sender, reward, winner_address);
            retval = true;
            reward = 0;
        }

        // clear bet queue
        for(uint i=_head; i<_tail; i++) {
            delete bets[i];
        }
        _head = 0;
        _tail = 0;
        return retval;
    }
    
    
    function GetMyBetinfo(uint betIdx) public returns (uint256[6] memory) {
        uint retIdx = 0;
      
        for(uint i=_head; i<_tail; i++) {
            if(bets[i].bettor_address == msg.sender) {
                retIdx++;
            }
            
            if(retIdx == betIdx){
                retIdx = i;
                break;
            }
        }
        bet1 = bets[retIdx].numbers[0];
        bet2 = bets[retIdx].numbers[1];
        bet3 = bets[retIdx].numbers[2];
        bet4 = bets[retIdx].numbers[3];
        bet5 = bets[retIdx].numbers[4];
        bet6 = bets[retIdx].numbers[5];
        return bets[retIdx].numbers;
    }



    function random() public returns (uint256[6] memory) {
        bytes32 currentBlockNum = blockhash(block.number-1);
        
 		 uint256[6] memory answer;
		uint256 tmp = uint256(currentBlockNum);
		for(uint i = 0; i<6; i++){
		    answer[i] = tmp % 50;
			tmp = tmp / 50;
		}
		answer1 = answer[0];
		answer2 = answer[1];
		answer3 = answer[2];
		answer4 = answer[3];
		answer5 = answer[4];
		answer6 = answer[5];
        

		return answer;
    }

    
    function () external payable { }
    
}
