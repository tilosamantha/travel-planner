import React from 'react';

import './App.css';
import Routes from './routes';
import Packing from './components/Packing/Packing';
import Stuff from './components/stuff/Stuff';
import Navbar from './components/navBar/navbar';
import CalendarView from './components/Calendar';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="body">
          <h1 id="header">Eurotrip</h1>
          <div className="main">
            <Navbar />
            <CalendarView />
            {/* <Routes /> */}
          </div>
        </div>
      </>
    )
  };
};

export default App;