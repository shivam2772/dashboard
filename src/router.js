import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dasboard';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" render={props => <Login {...props} />} />
          <Route path="/dashboard" render={props => <Dashboard {...props} />} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
