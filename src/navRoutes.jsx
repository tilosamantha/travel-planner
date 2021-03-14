import React from 'react';
import Stuff from './components/stuff/Stuff';
import Home from './components/Home';
import Packing from './components/Packing/Packing';
import CalendarView from './components/Calendar';
// import TravelDocs from './components/TravelDocs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/what-to-pack' component={Packing} />
    <Route path='/stuff' component={Stuff}/>
    <Route path='/calendar' component={CalendarView}/>
    {/* <Route path='/travel-documents' component={TravelDocs}/> */}

  </Switch>
  )}

export default Routes;