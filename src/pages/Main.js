import React, { Component } from 'react';
import Logo from '../asset/1.png';
import { Link } from 'react-router-dom';
import '../style.css';

const LotteryContract = window.web3.eth.contract(
    [
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
            "name": "GetApproval",
            "outputs": [],
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
            "name": "ShowAll",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
            "constant": true,
            "inputs": [],
            "name": "testValue",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
);
class Main extends Component {
    constructor (props) {
        super (props);

        this.state = {
            LotteryContractInstance: LotteryContract.at('0x54fec0c1225495f34916787c554d8d08798af4f5'),
            destructed: false
        };
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
    render() {
        return (
            <div>
        	<br/>
        	<br/>
            <h1><center>Hello Lottery World</center></h1>
            <br />
            <center><img id="input" src={Logo} alt=""/></center>
            <br />
            로터리의 주인은? 
            <button onClick={this.getContractOwner}>클릭</button>
            {this.state.contractOwner}
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
               <center><p>　　　USER: <input type="text" id="user_input_rg" /></p></center>
               <center><p>　　　　ID: <input type = "text" id="id_input_rg"/></p></center>
            	<center><p>PASSWORD: <input type="password" id="ps_input_rg"/></p></center>
            	<center><button type="button" id="reg_btn">register</button></center>
            </div>
            <div class="fixed-bottom bg-white" id="login_page">
            	<br />
            	<center><p>　　　　ID: <input type="text" id="id_input_lg"/></p></center>
            	<center><p>PASSWORD: <input type="password" id="ps_input_lg"/></p></center>
            	<center><button type="button" id="lg_btn"><Link to="/pull">login</Link></button></center>
            </div>
        </div>
        );
    }
}

export default Main;