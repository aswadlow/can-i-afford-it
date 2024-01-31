import { Link } from 'react-router-dom';
import './NavBar.css'
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; 
      <Link to="/profile">Profile</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name.toUpperCase()}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}