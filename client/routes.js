import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LandingPage from './components/LandingPage';
import AdminCenters from './components/AdminCenters';
import AdminPanels from './components/AdminPanels';
import SignOut from './components/SignOut';
import AdminCenterDetails from './components/AdminCenterDetails';
import Events from './components/Events';
import NotFound from './components/NotFound';
import checkAuth from './utils/checkAuthentication';

export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/centers' component={checkAuth(AdminCenters)}/>
      <Route exact path='/centers/:id' component={checkAuth(AdminCenterDetails)} />
      <Route exact path='/events' component={checkAuth(Events)}/>
      <Route exact path='/admin' component={checkAuth(AdminPanels)}/>
      <Route exact path='/logout' component={SignOut}/>
      <Route exact path='*' component={NotFound}/>
    </Switch>
  )
}
