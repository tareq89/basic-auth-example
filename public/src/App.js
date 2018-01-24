import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/dashboard/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import './App.css';
// import '../node_modules/grommet-css'

class App extends Component {
	render() {				
		return (
			<div>		 									 
				<Route exact={true} path='/' component={Home}/>
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
			</div>
		);
	}
}

export default App;