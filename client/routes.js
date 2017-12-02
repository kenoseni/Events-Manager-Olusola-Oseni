import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SignUp from './components/SignUp';
import Eventcenters from './components/Eventcenters';
import AllEvents from './components/AllEvents';


export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={SignUp}/>
      <Route exact path='/centers' component={Eventcenters}/>
      <Route exact path='/events' component={AllEvents}/>
    </Switch>
  )
}