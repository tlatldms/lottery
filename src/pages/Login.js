import React, { Component } from 'react';

class Login extends Component {
    render() {
        return(
            <div class="fixed-bottom bg-white" id="login_page">
            	<br/>>
            	<center><p>　　　　ID: <input type="text" id="id_input_lg"/></p></center>
            	<center><p>PASSWORD: <input type="password" id="ps_input_lg"/></p></center>
            	<center><button type="button" id="lg_btn">login</button></center>
            </div>
        );
    }
}

export default Login;