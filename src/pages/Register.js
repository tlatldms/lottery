import React, { Component } from 'react';

class Register extends Component {
    render() {
        return(
            <div class="fixed-bottom bg-white" id="reg_page">
               <br/>
               <center><p>　　　USER: <input type="text" id="user_input_rg"/></p></center>
               <center><p>　　　　ID: <input type = "text" id="id_input_rg"/></p></center>
            	<center><p>PASSWORD: <input type="password" id="ps_input_rg"/></p></center>
            	<center><button type="button" id="reg_btn">register</button></center>
            </div>
        );
    }
}

export default Register;