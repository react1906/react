import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css';

import App from './App'


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.querySelector('#root')
)

