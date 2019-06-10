import React, { Component } from 'react';
import Logo from '../asset/1.png';
import { Link } from 'react-router-dom';
import '../style.css';

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
            "name": "random",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[6]"
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
            "constant": false,
            "inputs": [],
            "name": "GetMyBetinfo",
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
            "constant": false,
            "inputs": [],
            "name": "ShowAll",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
class Main extends Component {
    constructor (props) {
        super (props);

        this.state = {
            LotteryContractInstance: LotteryContract.at('0x1c3c6de3548491741ea091b06efefd721bc4997f'),
            destructed: false
        };
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
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
    componentDidMount() {
        
        this.interval = setInterval(() => {
            this.getLoginName();
            this.getLoginAddr();
            this.getLoginId();
          }, 1000);
    }
    handleRegister = (e) => {
        e.preventDefault();
        const { Register } = this.state.LotteryContractInstance;
        Register(
            this.state.registerName,
            this.state.registerId,
            this.state.registerPassword,
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            }, (err, result) => {
                console.log(err, result);
            }
        )
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
            if (addr === "0x") {
                console.log("addr없음");
            }
        })
    }
    getLoginId=() => {
        const { nowLoginId } = this.state.LotteryContractInstance;
        nowLoginId((err,id) => {
            this.setState({
                nowLoginId: id,
            })

        })
    }
    handleLogin = (e) => {
        e.preventDefault();
        const { Login } = this.state.LotteryContractInstance;
        Login(
            this.state.loginId,
            this.state.loginPassword,
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            }, (err, result) => {
                console.log(err, result);
            }
        )
    }

    handleLogout=()=>{
        const { Logout } = this.state.LotteryContractInstance;
        Logout(
            {
                gas: 300000,
                from: window.web3.eth.accounts[0],
                value: window.web3.toWei(0,'ether')
            }, (err, result) => {
                console.log(err, result);
            }
        )
    }
    render() {
        return (
            <div>
        	<br/>
        	<br/>
            <h1><center>Hello Lottery World</center></h1>
            <br />
            <center><img id="input" src={Logo} alt=""/></center>
            현재 로그인 유저 이름: {this.state.nowLoginName} <br />
            현재 로그인 유저 주소: {this.state.nowLoginAddr}
            <br />
            <button onClick={this.handleLogout}>로그아웃</button>
            <Link to="/pull">뽑기페이지로</Link>
            <br />
            로터리의 주인은? 
            <button onClick={this.getContractOwner}>클릭</button>
            {this.state.contractOwner}
            <br/>
            
            <center>
            	<table>
	            	<tr>
	            		<td><center><button id="register" type="button" class="btn btn-success btn-lg">REGISTER</button></center></td>
	            		<td>　　　</td>
	            		<td><center><button id="login" type="button" class="btn btn-primary btn-lg">LOGIN</button></center></td>
	            	</tr>
            	</table>
            </center>
            <div class="fixed-bottom bg-white" id="reg_page">
               <br />>
               <center><p>　　　USER: <input onChange={this.handleChange} name="registerName" type="text" id="user_input_rg" /></p></center>
               <center><p>　　　　ID: <input onChange={this.handleChange} name="registerId" type = "text" id="id_input_rg"/></p></center>
            	<center><p>PASSWORD: <input onChange={this.handleChange} name="registerPassword" type="password" id="ps_input_rg"/></p></center>
            	<center><button onClick={this.handleRegister} type="button" id="reg_btn">register</button></center>
            </div>
            <div class="fixed-bottom bg-white" id="login_page">
            	<br />
            	<center><p>　　　　ID: <input onChange={this.handleChange} name="loginId" type="text" id="id_input_lg"/></p></center>
            	<center><p>PASSWORD: <input onChange={this.handleChange} name="loginPassword" type="password" id="ps_input_lg"/></p></center>
            	<center><button onClick={this.handleLogin} type="button" id="lg_btn">login</button></center>
                
            </div>
        </div>
        );
    }
}

export default Main;