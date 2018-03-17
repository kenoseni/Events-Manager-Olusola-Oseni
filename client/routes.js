import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LandingPage from './components/LandingPage';
import AdminCenters from './components/AdminCenters';
import AdminCenterDetails from './components/AdminCenterDetails';
import Events from './components/Events';



export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/centers' component={AdminCenters}/>
      <Route exact path='/centers/:id' component={AdminCenterDetails} />
      <Route exact path='/events' component={Events}/>
    </Switch>
  )
}
