import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import win_img from '../asset/win.png';
import lose_img from '../asset/lose.png';

const LotteryContract = window.web3.eth.contract(
    [
        {
            "constant": false,
            "inputs": [],
            "name": "CloseLottery",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "initialize_betnumbers",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isdistributed",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "amIwin",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "initialize_answer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetReward",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "answer6",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "answer4",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nowLoginName",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "GetApproval",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "bet1",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "random",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[6]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "checkBalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "answer3",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "bet4",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "AmIwin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "answer2",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nowLoginId",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Distribute",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nowBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "TestBuyer",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "betIdx",
                    "type": "uint256"
                }
            ],
            "name": "GetMyBetinfo",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[6]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "id",
                    "type": "string"
                },
                {
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "Register",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "bet6",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "winner_address",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "OpenLottery",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "answer1",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "bet2",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "bet5",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "id",
                    "type": "string"
                },
                {
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "Login",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "bettor",
                    "type": "address"
                },
                {
                    "name": "betting_numbers",
                    "type": "uint256[6]"
                }
            ],
            "name": "Bet",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "Logout",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "bet3",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nowLoginAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "answer5",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nowState",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "buyer",
                    "type": "address"
                }
            ],
            "name": "BuyToken",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_LotteryToken",
                    "type": "address"
                },
                {
                    "name": "_rate",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "bettor_address",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "numbers",
                    "type": "uint256[6]"
                }
            ],
            "name": "BET",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "bettor_address",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "numbers",
                    "type": "uint256[6]"
                }
            ],
            "name": "CHECKBET",
            "type": "event"
        }
    ]
);

class Pull extends Component {

    constructor (props) {
        super (props);

        this.state = {
            LotteryContractInstance: LotteryContract.at('0xc810dcceca8af00cd05b338e73e1f90d6a9ceb35'),
            destructed: false,
            selected: []
        };
        
    } 

    componentDidMount() {
        this.getContractOwner();
        this.getLoginAddr();
        this.getLoginName();
        this.getLotteryState();
        this.getAnswer();
        this.getIfWin();
        this.getIfDistributed();

        this.interval = setInterval(() => {
            this.nowBalance();
            this.getReward();
        }, 2000);
    }

    selectNumber=(e)=>{
        const newArr=[];
        const selected = this.state.selected;
        if (selected.indexOf(e.target.value) != -1 ) {
            const deleted=selected.filter(x=> x != e.target.value)
            this.setState({
                selected: deleted
            })
        }
        else if (selected.length >= 6 ) {
            /* for (let i=0; i<5; i++) {
                newArr[i]=selected[i+1];
            }
            newArr[5]=e.target.value;
            this.setState({
                selected: newArr
            });
            */
           alert("6개까지만 선택하실 수 있습니다");
        } else {
            this.setState({
                selected: selected.concat(e.target.value)
            })
        }
    }
    getContractOwner = () => {
        const { owner } = this.state.LotteryContractInstance;
        owner((err,addr) => {
            this.setState({
                contractOwner: addr,
            })
            if (addr == "0x") {
                console.log("addr 없음");
            }
        })
    }
    Betting=()=>{
        if (this.state.selected.length != 6) {
            alert("숫자 6개를 선택해 주십시오.");
        } else {
        const { Bet } = this.state.LotteryContractInstance;
        Bet(
            this.state.nowLoginAddr,
            this.state.selected,
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            },(err, result) => {
                console.log(err, result);
        });

        }
    }

    getLotteryState=() => {
        const { nowState } = this.state.LotteryContractInstance;
        nowState((err,ret) => {
            this.setState({
                isLotteryClosed: ret.c[0],
            })
        })
    }

    getReward=() => {
        const { GetReward } = this.state.LotteryContractInstance;
        GetReward((err,ret) => {
            this.setState({
                nowReward: ret.c[0],
            })
        })
    }

    getLoginName=() => {
        const { nowLoginName } = this.state.LotteryContractInstance;
        nowLoginName((err,name) => {
            this.setState({
                nowLoginName: name,
            })
        })
    }
    getLoginAddr=() => {
        const { nowLoginAddr } = this.state.LotteryContractInstance;
        nowLoginAddr((err,addr) => {
            this.setState({
                nowLoginAddr: addr,
            })
            console.log(addr);
            if (addr === "0x") {
                console.log("addr없음");
            }
        })
    }

    openLottery=()=>{
        const {  OpenLottery } = this.state.LotteryContractInstance;
        OpenLottery(
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            },(err, result) => {
                console.log(err, result);
        });
    }

    closeLottery=()=>{
        const {  CloseLottery } = this.state.LotteryContractInstance;
        CloseLottery(
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            },(err, result) => {
                console.log(err, result);
        });
    }
    
    buyToken= () => {
        const { BuyToken } = this.state.LotteryContractInstance;
        BuyToken(
            this.state.nowLoginAddr,
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(this.state.howMuch,'ether')
            },(err, result) => {
                console.log(err, result);
        });
        this.setState({
            isModalOpen:false
        })
    }

    checkBalance= () => {      
        const { checkBalance } = this.state.LotteryContractInstance;
        checkBalance(
            this.state.nowLoginAddr,
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            },(err, result) => {
                console.log(err, result);
        });
    }

    amIWinFunc= () => {      
        const { AmIwin } = this.state.LotteryContractInstance;
        AmIwin(
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            },(err, result) => {
                console.log(err, result);
        });
    }

    getIfWin=()=>{
        const { amIwin } = this.state.LotteryContractInstance;
        amIwin((err,ret) => {
            this.setState({
                amIwin: ret
            })
        })
    }

    nowBalance= () =>{
        const { nowBalance } = this.state.LotteryContractInstance;
        nowBalance((err,bal) => {
            this.setState({
                nowBal: bal.c[0]
            })
        })
    }

    getIfDistributed= () =>{
        const { isdistributed } = this.state.LotteryContractInstance;
        isdistributed((err,bol) => {
            this.setState({
                isDistributed: bol
            })
        })
    }
    getAnswer = () => {
        this.getAnswer1();
        this.getAnswer2();
        this.getAnswer3();
        this.getAnswer4();
        this.getAnswer5();
        this.getAnswer6();
    }
    getAnswer1=()=>{
        const { answer1 }= this.state.LotteryContractInstance;
        answer1((err,ret) => {
            this.setState({
                answer1: ret
            })
        });
    }
    getAnswer2=()=>{
        const { answer2 }= this.state.LotteryContractInstance;
        answer2((err,ret) => {
            this.setState({
                answer2: ret
            })
        });
    }
    getAnswer3=()=>{
        const { answer3 }= this.state.LotteryContractInstance;
        answer3((err,ret) => {
            this.setState({
                answer3: ret
            })
        });
    }
    getAnswer4=()=>{
        const { answer4 }= this.state.LotteryContractInstance;
        answer4((err,ret) => {
            this.setState({
                answer4: ret
            })
        });
    }
    getAnswer5=()=>{
        const { answer5 }= this.state.LotteryContractInstance;
        answer5((err,ret) => {
            this.setState({
                answer5: ret
            })
        });
    }
    getAnswer6=()=>{
        const { answer6 }= this.state.LotteryContractInstance;
        answer6((err,ret) => {
            this.setState({
                answer6: ret
            })
        });
    }


    onCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    onCloseModal2 = () =>{
        this.setState({ isModalOpen2: false});
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    render() {
        return(
            <div>

            <br />
            <Modal open={this.state.isModalOpen} onClose={this.onCloseModal} center style={nopad}>
                <div className="popup">
                    <br/><br/>
                    1 ether = 7 LTK
                    <br />
                    <input onChange={this.handleChange} name="howMuch" placeholder="How much to buy?"/>
                    <button onClick={this.buyToken}>구입</button>
                </div>
            </Modal>
            <Modal open={this.state.isModalOpen2} onClose={this.onCloseModal2} center style={nopad}>
                <div class="result">
                    {this.state.amIwin 
                    ?
                    <React.Fragment>
                    <center><img id="input" src={win_img} alt=""/></center>
                    <br/>
                    <h1> You win the lottery !!!!!!!!!</h1>
                    </React.Fragment>
                :
                <React.Fragment>
                <center><img id="input2" src={lose_img} alt=""/></center>
                    <br/>
                    <h1> You lose the lottery ........ OTL</h1>
                    </React.Fragment>
                }
                    
                    
                </div>
            </Modal>
            <center>
            <br/>
    
            </center>
            <br/>
            <center>
            <table>
                <tr>
                    <td>
                        <center>
                            <p>안녕하세요, {this.state.nowLoginName} 님.<br/>
                            남은 토큰:{this.state.nowBal}</p>
                            <p>현재 남은 리워드: {this.state.nowReward}</p>
                            <p>{this.state.isLotteryClosed==1 ? "현재상태 : 현재 베팅 불가능" : "현재상태 : 현재 베팅 가능"}<br/></p>
                            <table>
                                    <tr>
                                        <td><center><button onClick={this.checkBalance} class="btn btn-info">잔액 새로고침</button> </center></td>
                                        <td>　</td>
                                        <td><center> <button onClick={()=>this.setState({isModalOpen:true})} class="btn btn-info">토큰 사기</button></center></td>
                                        <td>　</td>
                                        <td><center><button onClick={this.Betting} class="btn btn-info">베팅하기</button></center></td>
                                    </tr>
                                    <tr><td>　　　</td></tr>
                                    <tr>
                                        <td><center><button onClick={this.openLottery} class="btn btn-info">Open Lottery</button></center></td>
                                        <td>　　　</td>
                                        <td><center><button onClick={this.closeLottery} class="btn btn-info" >Close Lottery</button></center></td>
                                        <td>　　　</td>
                                        <td><center><button onClick={this.closeLottery} class="btn btn-info" >Distribute</button></center></td>
                                    </tr>
                            </table>
                            <br />
                            <center><button onClick={()=>{
                                if (this.state.isDistributed) {
                                    this.setState({isModalOpen2:true})
                                } else alert("아직 진행중인 Lottery입니다.");
                            }} class="btn btn-warning btn-lg">Result</button></center>
                        </center>
                    </td>
                    <td>　　　　　　　</td>
                    <td>
                        <center>
                            <table id="ball_table">
                                <tr>
                                    <td>
                                        {[1,2,3,4,5,6,7].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="first_line"> {x} </button>}
                                        )}
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {[8,9,10,11,12,13,14].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="second_line"> {x} </button>}
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {[15,16,17,18,19,20,21].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="third_line"> {x} </button>}
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {[22,23,24,25,26,27,28].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="forth_line"> {x} </button>}
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {[29,30,31,32,33,34,35].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="fifth_line"> {x} </button>}
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {[36,37,38,39,40,41,42].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="sixth_line"> {x} </button>}
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {[43,44,45,46,47,48,49].map(
                                            x=> {return <button onClick={this.selectNumber} type="button" value={x} class="last_line"> {x} </button>}
                                        )}
                                    </td>
                                </tr>
                            </table>
                            <br/>
                            선택한 숫자: {this.state.selected.map(x=> {return <span>{x} </span>  })}<br/><br/>
                        </center>
                        </td>
                    </tr>
            </table>
            </center>

            <br/>
            <center>
            {this.state.contractOwner == this.state.nowLoginAddr ?
                    <div>
                    </div>
                    : 
                    this.state.nowLoginAddr== "0x0000000000000000000000000000000000000000" ? "로그인안함" :"평민"}
            </center>
        </div>
        );
    }
}

export default Pull;
const nopad = {
    padding: '0px',
}
