import React, { Component } from 'react';
import Logo from '../asset/1.png';
import { Link } from 'react-router-dom';
import '../style.css';

const LotteryContract = window.web3.eth.contract(
    [
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
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
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "name": "buyer",
                    "type": "address"
                }
            ],
            "name": "transferFrom",
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
            "inputs": [
                {
                    "name": "who",
                    "type": "address"
                }
            ],
            "name": "balOf",
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
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
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
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "spender",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }
    ]
);
class Main extends Component {
    constructor (props) {
        super (props);

        this.state = {
            LotteryContractInstance: LotteryContract.at('0xb4bcdf86e7a36a14292d6443e13e2f39be2dba24'),
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
            if (name === "") {
                console.log("name 없음");
            }
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
            if (id === "") {
                console.log("id 없음");
            }
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