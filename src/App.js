import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Registration/Login';
import './styles.css';

const App = () => {
  let a;
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;
