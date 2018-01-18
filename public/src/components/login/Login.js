import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import LoginForm from 'grommet-addons/node_modules/grommet/components/LoginForm';
import {reactLocalStorage} from 'reactjs-localstorage';
import CircleLoaderWrapper from '../circleLoader/CircleLoader';



const loginInProgressStyle = {
    opacity: '0.4'    
}

const ForgetPasswordComponent = () => (
    <div style={{float:'left', overflow: 'hidden'}}>
        <Link to='/forget-password'>Forgot password?</Link>
    </div>
)

const SignupLinkComponent = () => (
    <div style={{float: 'right'}}>
        <Link to='/signup'>Signup</Link>
    </div>
)

const HelperLinkCompositComponent = () => {
    return (
        <div>            
            <ForgetPasswordComponent />                
            <SignupLinkComponent />            
        </div>
    )
}


class Login extends Component {
    constructor(props) {
        super(props);
        const isLoggedIn = reactLocalStorage.get('isLoggedIn') === 'true'? true : false;        
        this.state = { isLoggedIn: isLoggedIn, loginRequestSent: false };          
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        reactLocalStorage.set('isLoggedIn', true);
        this.setState({isLoggedIn: false, loginRequestSent: true ,});
        setTimeout(() => {
            this.setState({isLoggedIn: true, loginRequestSent: true,});    
        }, 1000);
        
    }
    render() {
        let spinning = null;
        if(this.state.loginRequestSent) {
            spinning =  (<CircleLoaderWrapper loading={this.state.loginRequestSent}/>);
        }
        
        const login = this.state.isLoggedIn? <Redirect to='/' /> : 
                    (<div>
                        <div className = 'absolute-center' style={this.state.loginRequestSent? loginInProgressStyle: null}>
                            <LoginForm
                                align = {'center'}
                                onSubmit = {this.handleSubmit}
                                title='Login'
                                forgotPassword={
                                    <HelperLinkCompositComponent />
                                }
                                rememberMe={true}
                                onFocus={this.state.loginRequestSent}/>
                        </div>
                        {spinning}
                    </div>);         
        return login;		
    }
}

export default Login;