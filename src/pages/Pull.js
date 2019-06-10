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
            destructed: false
        };
    } 

    componentDidMount() {
        
        this.interval = setInterval(() => {
            this.getLoginName();
        }, 1000);
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
                안녕하세요, {this.state.nowLoginName} 님.
            <br/><br/><br/>
            <center>
                <table id="ball_table">
                    <tr>
                        <td>
                            <button type="button" class="first_line"> 1 </button>
                            <button type="button" class="first_line"> 2 </button>
                            <button type="button" class="first_line"> 3 </button>
                            <button type="button" class="first_line"> 4 </button>
                            <button type="button" class="first_line"> 5 </button>
                            <button type="button" class="first_line"> 6 </button>
                            <button type="button" class="first_line"> 7 </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="second_line">8</button>
                            <button type="button" class="second_line">9</button>
                            <button type="button" class="second_line">10</button>
                            <button type="button" class="second_line">11</button>
                            <button type="button" class="second_line">12</button>
                            <button type="button" class="second_line">13</button>
                            <button type="button" class="second_line">14</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="third_line">15</button>
                            <button type="button" class="third_line">16</button>
                            <button type="button" class="third_line">17</button>
                            <button type="button" class="third_line">18</button>
                            <button type="button" class="third_line">19</button>
                            <button type="button" class="third_line">20</button>
                            <button type="button" class="third_line">21</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="forth_line">22</button>
                            <button type="button" class="forth_line">23</button>
                            <button type="button" class="forth_line">24</button>
                            <button type="button" class="forth_line">25</button>
                            <button type="button" class="forth_line">26</button>
                            <button type="button" class="forth_line">27</button>
                            <button type="button" class="forth_line">28</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="fifth_line">29</button>
                            <button type="button" class="fifth_line">30</button>
                            <button type="button" class="fifth_line">31</button>
                            <button type="button" class="fifth_line">32</button>
                            <button type="button" class="fifth_line">33</button>
                            <button type="button" class="fifth_line">34</button>
                            <button type="button" class="fifth_line">35</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="sixth_line">36</button>
                            <button type="button" class="sixth_line">37</button>
                            <button type="button" class="sixth_line">38</button>
                            <button type="button" class="sixth_line">39</button>
                            <button type="button" class="sixth_line">40</button>
                            <button type="button" class="sixth_line">41</button>
                            <button type="button" class="sixth_line">42</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="last_line">43</button>
                            <button type="button" class="last_line">44</button>
                            <button type="button" class="last_line">45</button>
                            <button type="button" class="last_line">46</button>
                            <button type="button" class="last_line">47</button>
                            <button type="button" class="last_line">48</button>
                            <button type="button" class="last_line">49</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
        );
    }
}

export default Pull;