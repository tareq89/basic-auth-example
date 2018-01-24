import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import '../node_modules/grommet-css'
import registerServiceWorker from './registerServiceWorker';
import { default as GrommetApp } from 'grommet/components/App'
ReactDOM.render((
    <GrommetApp>
        <Router>
            <App />
        </Router>
    </GrommetApp>)
    , document.getElementById('root'));
registerServiceWorker();
