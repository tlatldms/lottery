import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

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

class Pull extends Component {

    constructor (props) {
        super (props);

        this.state = {
            LotteryContractInstance: LotteryContract.at('0xb4bcdf86e7a36a14292d6443e13e2f39be2dba24'),
            destructed: false,
            selected: []
        };
        
    } 

    componentDidMount() {
        
        this.interval = setInterval(() => {
            this.getLoginName();
            this.nowBalance();
            this.getLoginAddr();
        }, 1000);
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
            console.log(addr);
            if (addr === "0x") {
                console.log("addr없음");
            }
        })
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

    nowBalance= () =>{
        const { nowBalance } = this.state.LotteryContractInstance;
        nowBalance((err,bal) => {

            this.setState({
                nowBal: bal.c[0]
            })
           
        })
    }

    onCloseModal = () => {
        this.setState({ isModalOpen: false });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    render() {
        return(
            <div>
            <Modal open={this.state.isModalOpen} onClose={this.onCloseModal} center style={nopad}>
                <div className="popup">
                    <br/><br/>
                    1 ether = 7 LTK
                    <br />
                    <input onChange={this.handleChange} name="howMuch" placeholder="How much to buy?"/>
                    <button onClick={this.buyToken}>구입</button>
                </div>
            </Modal>
                
                안녕하세요, {this.state.nowLoginName} 님. 남은 토큰:{this.state.nowBal} <button onClick={this.checkBalance}>잔액 새로고침</button> <button onClick={()=>this.setState({isModalOpen:true})}>토큰 사기</button>
            <br/>
            선택한 숫자: {this.state.selected.map(x=> {return <span>{x} </span>  })}<br/><br/>
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
            </center>
        </div>
        );
    }
}

export default Pull;
const nopad = {
    padding: '0px',
}
