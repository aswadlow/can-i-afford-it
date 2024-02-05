import React from 'react';
import { Link } from 'react-router-dom';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-xxl'>
        <Link className='navbar-brand' to="/profile">Profile</Link>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <span className='nav-link'>Welcome, {user.name.toUpperCase()}</span>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="" onClick={handleLogOut}>Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
