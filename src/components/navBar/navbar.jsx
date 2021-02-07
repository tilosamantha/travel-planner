import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-bar">
          <li className="nav-tab">
            <Link className="link" to='/'>Home</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/travel-docs'>Travel Docs</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/what-to-pack'>Packing List</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/stuff'>Stuff to Do</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/calendar'>Calendar</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/budgeting'>Budgeting</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/google-maps'>Google Maps</Link>
          </li>
          <li className="nav-tab">
            <Link className="link" to='/all-my-trips'>All Trips</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;