(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n.p+"static/media/1.450820bc.png"},32:function(t,e,n){t.exports=n(54)},37:function(t,e,n){},38:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(7),i=n.n(l),u=(n(37),n(9)),s=n(6),c=n(11),r=n(12),p=n(13),y=n(15),m=n(14),d=n(16),b=n(24),g=n.n(b),w=(n(38),window.web3.eth.contract([{constant:!1,inputs:[{name:"buyer",type:"address"}],name:"BuyToken",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"checkBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"CloseLottery",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"GetApproval",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"GetMyBetinfo",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"id",type:"string"},{name:"password",type:"string"}],name:"Login",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Logout",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"OpenLottery",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"id",type:"string"},{name:"password",type:"string"}],name:"Register",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"ShowAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"value",type:"uint256"}],name:"withdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[{name:"_LotteryToken",type:"address"},{name:"_rate",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"index",type:"uint256"},{indexed:!1,name:"bettor_address",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"numbers",type:"uint256[6]"}],name:"BET",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"index",type:"uint256"},{indexed:!1,name:"bettor_address",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"numbers",type:"uint256[6]"}],name:"CHECKBET",type:"event"},{constant:!0,inputs:[],name:"GetReward",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowLoginAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowLoginId",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowLoginName",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"testValue",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}])),f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(y.a)(this,Object(m.a)(e).call(this,t))).handleChange=function(t){n.setState(Object(c.a)({},t.target.name,t.target.value))},n.getContractOwner=function(){(0,n.state.LotteryContractInstance.owner)(function(t,e){n.setState({contractOwner:e}),"0x"==e&&console.log("addr \uc5c6\uc74c")})},n.handleRegister=function(t){t.preventDefault(),(0,n.state.LotteryContractInstance.Register)(n.state.registerName,n.state.registerId,n.state.registerPassword,{gas:3e5,from:window.web3.eth.accounts[0],value:window.web3.toWei(0,"ether")},function(t,e){console.log(t,e)})},n.getLoginName=function(){(0,n.state.LotteryContractInstance.nowLoginName)(function(t,e){n.setState({nowLoginName:e})})},n.getLoginAddr=function(){(0,n.state.LotteryContractInstance.nowLoginAddr)(function(t,e){n.setState({nowLoginAddr:e}),"0x"===e&&console.log("addr\uc5c6\uc74c")})},n.getLoginId=function(){(0,n.state.LotteryContractInstance.nowLoginId)(function(t,e){n.setState({nowLoginId:e})})},n.handleLogin=function(t){t.preventDefault(),(0,n.state.LotteryContractInstance.Login)(n.state.loginId,n.state.loginPassword,{gas:3e5,from:window.web3.eth.accounts[0],value:window.web3.toWei(0,"ether")},function(t,e){console.log(t,e)})},n.handleLogout=function(){(0,n.state.LotteryContractInstance.Logout)({gas:3e5,from:window.web3.eth.accounts[0],value:window.web3.toWei(0,"ether")},function(t,e){console.log(t,e)})},n.state={LotteryContractInstance:w.at("0xb4bcdf86e7a36a14292d6443e13e2f39be2dba24"),destructed:!1},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval(function(){t.getLoginName(),t.getLoginAddr(),t.getLoginId()},1e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",null,o.a.createElement("center",null,"Hello Lottery World")),o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement("img",{id:"input",src:g.a,alt:""})),"\ud604\uc7ac \ub85c\uadf8\uc778 \uc720\uc800 \uc774\ub984: ",this.state.nowLoginName," ",o.a.createElement("br",null),"\ud604\uc7ac \ub85c\uadf8\uc778 \uc720\uc800 \uc8fc\uc18c: ",this.state.nowLoginAddr,o.a.createElement("br",null),o.a.createElement("button",{onClick:this.handleLogout},"\ub85c\uadf8\uc544\uc6c3"),o.a.createElement(u.b,{to:"/pull"},"\ubf51\uae30\ud398\uc774\uc9c0\ub85c"),o.a.createElement("br",null),"\ub85c\ud130\ub9ac\uc758 \uc8fc\uc778\uc740?",o.a.createElement("button",{onClick:this.getContractOwner},"\ud074\ub9ad"),this.state.contractOwner,o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("center",null,o.a.createElement("button",{id:"register",type:"button",class:"btn btn-success btn-lg"},"REGISTER"))),o.a.createElement("td",null,"\u3000\u3000\u3000"),o.a.createElement("td",null,o.a.createElement("center",null,o.a.createElement("button",{id:"login",type:"button",class:"btn btn-primary btn-lg"},"LOGIN")))))),o.a.createElement("div",{class:"fixed-bottom bg-white",id:"reg_page"},o.a.createElement("br",null),">",o.a.createElement("center",null,o.a.createElement("p",null,"\u3000\u3000\u3000USER: ",o.a.createElement("input",{onChange:this.handleChange,name:"registerName",type:"text",id:"user_input_rg"}))),o.a.createElement("center",null,o.a.createElement("p",null,"\u3000\u3000\u3000\u3000ID: ",o.a.createElement("input",{onChange:this.handleChange,name:"registerId",type:"text",id:"id_input_rg"}))),o.a.createElement("center",null,o.a.createElement("p",null,"PASSWORD: ",o.a.createElement("input",{onChange:this.handleChange,name:"registerPassword",type:"password",id:"ps_input_rg"}))),o.a.createElement("center",null,o.a.createElement("button",{onClick:this.handleRegister,type:"button",id:"reg_btn"},"register"))),o.a.createElement("div",{class:"fixed-bottom bg-white",id:"login_page"},o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement("p",null,"\u3000\u3000\u3000\u3000ID: ",o.a.createElement("input",{onChange:this.handleChange,name:"loginId",type:"text",id:"id_input_lg"}))),o.a.createElement("center",null,o.a.createElement("p",null,"PASSWORD: ",o.a.createElement("input",{onChange:this.handleChange,name:"loginPassword",type:"password",id:"ps_input_lg"}))),o.a.createElement("center",null,o.a.createElement("button",{onClick:this.handleLogin,type:"button",id:"lg_btn"},"login"))))}}]),e}(a.Component),h=n(30),E=window.web3.eth.contract([{constant:!1,inputs:[{name:"buyer",type:"address"}],name:"BuyToken",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"checkBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"CloseLottery",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"GetApproval",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"GetMyBetinfo",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"id",type:"string"},{name:"password",type:"string"}],name:"Login",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Logout",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"OpenLottery",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"id",type:"string"},{name:"password",type:"string"}],name:"Register",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"ShowAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"value",type:"uint256"}],name:"withdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[{name:"_LotteryToken",type:"address"},{name:"_rate",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"index",type:"uint256"},{indexed:!1,name:"bettor_address",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"numbers",type:"uint256[6]"}],name:"BET",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"index",type:"uint256"},{indexed:!1,name:"bettor_address",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"numbers",type:"uint256[6]"}],name:"CHECKBET",type:"event"},{constant:!0,inputs:[],name:"GetReward",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowLoginAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowLoginId",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"nowLoginName",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"testValue",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]),v=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(y.a)(this,Object(m.a)(e).call(this,t))).selectNumber=function(t){var e=n.state.selected;if(-1!=e.indexOf(t.target.value)){var a=e.filter(function(e){return e!=t.target.value});n.setState({selected:a})}else e.length>=6?alert("6\uac1c\uae4c\uc9c0\ub9cc \uc120\ud0dd\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4"):n.setState({selected:e.concat(t.target.value)})},n.getLoginName=function(){(0,n.state.LotteryContractInstance.nowLoginName)(function(t,e){n.setState({nowLoginName:e})})},n.getLoginAddr=function(){(0,n.state.LotteryContractInstance.nowLoginAddr)(function(t,e){n.setState({nowLoginAddr:e}),console.log(e),"0x"===e&&console.log("addr\uc5c6\uc74c")})},n.buyToken=function(){(0,n.state.LotteryContractInstance.BuyToken)(n.state.nowLoginAddr,{gas:3e5,from:window.web3.eth.accounts[0],value:window.web3.toWei(n.state.howMuch,"ether")},function(t,e){console.log(t,e)}),n.setState({isModalOpen:!1})},n.checkBalance=function(){(0,n.state.LotteryContractInstance.checkBalance)(n.state.nowLoginAddr,{gas:3e5,from:window.web3.eth.accounts[0],value:window.web3.toWei(0,"ether")},function(t,e){console.log(t,e)})},n.nowBalance=function(){(0,n.state.LotteryContractInstance.nowBalance)(function(t,e){n.setState({nowBal:e.c[0]})})},n.onCloseModal=function(){n.setState({isModalOpen:!1})},n.handleChange=function(t){n.setState(Object(c.a)({},t.target.name,t.target.value))},n.state={LotteryContractInstance:E.at("0xb4bcdf86e7a36a14292d6443e13e2f39be2dba24"),destructed:!1,selected:[]},n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval(function(){t.getLoginName(),t.nowBalance(),t.getLoginAddr()},1e3)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(h.a,{open:this.state.isModalOpen,onClose:this.onCloseModal,center:!0,style:L},o.a.createElement("div",{className:"popup"},o.a.createElement("br",null),o.a.createElement("br",null),"1 ether = 7 LTK",o.a.createElement("br",null),o.a.createElement("input",{onChange:this.handleChange,name:"howMuch",placeholder:"How much to buy?"}),o.a.createElement("button",{onClick:this.buyToken},"\uad6c\uc785"))),"\uc548\ub155\ud558\uc138\uc694, ",this.state.nowLoginName," \ub2d8. \ub0a8\uc740 \ud1a0\ud070:",this.state.nowBal," ",o.a.createElement("button",{onClick:this.checkBalance},"\uc794\uc561 \uc0c8\ub85c\uace0\uce68")," ",o.a.createElement("button",{onClick:function(){return t.setState({isModalOpen:!0})}},"\ud1a0\ud070 \uc0ac\uae30"),o.a.createElement("br",null),"\uc120\ud0dd\ud55c \uc22b\uc790: ",this.state.selected.map(function(t){return o.a.createElement("span",null,t," ")}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("center",null,o.a.createElement("table",{id:"ball_table"},o.a.createElement("tr",null,o.a.createElement("td",null,[1,2,3,4,5,6,7].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"first_line"}," ",e," ")}))),o.a.createElement("tr",null,o.a.createElement("td",null,[8,9,10,11,12,13,14].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"second_line"}," ",e," ")}))),o.a.createElement("tr",null,o.a.createElement("td",null,[15,16,17,18,19,20,21].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"third_line"}," ",e," ")}))),o.a.createElement("tr",null,o.a.createElement("td",null,[22,23,24,25,26,27,28].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"forth_line"}," ",e," ")}))),o.a.createElement("tr",null,o.a.createElement("td",null,[29,30,31,32,33,34,35].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"fifth_line"}," ",e," ")}))),o.a.createElement("tr",null,o.a.createElement("td",null,[36,37,38,39,40,41,42].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"sixth_line"}," ",e," ")}))),o.a.createElement("tr",null,o.a.createElement("td",null,[43,44,45,46,47,48,49].map(function(e){return o.a.createElement("button",{onClick:t.selectNumber,type:"button",value:e,class:"last_line"}," ",e," ")}))))))}}]),e}(a.Component),L={padding:"0px"};var C=function(){return o.a.createElement("div",null,o.a.createElement(s.a,{exact:!0,path:"/",component:f}),o.a.createElement(s.a,{path:"/pull",component:v}))},M=function(){return o.a.createElement(u.a,{basename:"/lottery"},o.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.9ce5bdcf.chunk.js.map