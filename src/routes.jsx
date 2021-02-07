import React from 'react';
import Stuff from './components/stuff/Stuff';
import Home from './components/Home';
import Packing from './components/Packing/Packing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/what-to-pack'>
      <Packing />
    </Route>
    <Route path='/stuff' component={Stuff}/>
  </Switch>
  )}

export default Routes;