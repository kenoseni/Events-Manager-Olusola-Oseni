import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LandingPage from './components/LandingPage';



export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  )
}
