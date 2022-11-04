import React from 'react';
import ReactDOM from 'react-dom';
import WebRoot from './app/js/webRoot';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/common/main.scss';
import './app/styles/common/account.scss';
import {store} from './store'

ReactDOM.render(
    <>
    <Provider store={store}>
        <WebRoot />
    </Provider>
    </>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
