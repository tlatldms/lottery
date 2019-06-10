import React, { Component } from 'react';

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
            LotteryContractInstance: LotteryContract.at('0x92f76c4dbe0bd7f85be54b1a14be0637b86a5b45'),
            destructed: false,
            selected: []
        };
        
    } 

    componentDidMount() {
        
        this.interval = setInterval(() => {
            this.getLoginName();
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


    render() {
        return(
            <div>
                안녕하세요, {this.state.nowLoginName} 님. 남은 토큰:
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