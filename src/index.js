import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'regenerator-runtime/runtime';
import { Route } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';

ReactDOM.render(<BrowserRouter> <Route path='/' render={() => <App />}/> </BrowserRouter> , document.getElementById('root'));

module.hot.accept();
