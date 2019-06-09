import React, { Component } from 'react';
import Logo from '../asset/1.png';
import { Link } from 'react-router-dom';


import '../style.css';
class Main extends Component {
    render() {
        return (
            <div>
        	<br/>
        	<br/>
            <h1><center>Hello Lottery World</center></h1>
            <br />
            <center><img id="input" src={Logo} alt=""/></center>
            <br />
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