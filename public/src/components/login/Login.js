import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from 'grommet-addons/node_modules/grommet/components/LoginForm';
import Anchor  from 'grommet-addons/node_modules/grommet/components/Anchor';
import { CircleLoader } from 'react-spinners';
import {reactLocalStorage} from 'reactjs-localstorage';

const circleLoaderContainerDivStyle = {
    height: '100vh',
}

const circleLoaderPosition = {
    top: '50%',
    bottom: '50%',
    position: 'absolute',
    right: '50%',
    left: '50%',
}

const loginInProgressStyle = {
    opacity: '0.4'
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
            spinning =  <div style={circleLoaderContainerDivStyle}>
                            <div style={circleLoaderPosition}>
                                <CircleLoader size={100} color={'#865CD6'} loading={this.state.loginRequestSent} />
                            </div>
                        </div>
        }
        const login = this.state.isLoggedIn? <Redirect to='/' /> : (<div>
                        <div className = 'absolute-center' style={this.state.loginRequestSent? loginInProgressStyle: null}>
                            <LoginForm
                                align = {'center'}
                                onSubmit = {this.handleSubmit}
                                title='Login'
                                forgotPassword={<Anchor href='#'
                                label='Forgot password?' />}
                                rememberMe={true}
                                onFocus={this.state.loginRequestSent}/>
                        </div>
                        {spinning}
                    </div>);  
         
        return login;		
    }
}

export default Login;