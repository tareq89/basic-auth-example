import React, { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import logo from './../../../logo.svg';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
		super(props);
		const isLoggedIn = reactLocalStorage.get('isLoggedIn') === 'true'? true : false;        
        this.state = { isLoggedIn: isLoggedIn };
		this.logOutHandler = this.logOutHandler.bind(this);
	}

	logOutHandler = () => {
		reactLocalStorage.set('isLoggedIn', false);
		this.setState({ isLoggedIn: false });
	}

    render() {
		const homePage = this.state.isLoggedIn? (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React!!!***</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={this.logOutHandler}>Log Out</button>
			</div>
		): <Redirect to='/login' />;

		return homePage;
		        
    }
}

export default Home;