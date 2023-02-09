import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Header() { 
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // change login to logout on return
  }
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand"> <Link to="/home" class="nav-link">Home </Link></a>
        <a class="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link to="/login">Login </Link>
        </a>
        <Logout/>
        <Link to="/signup">Signup </Link>
        <Link to="/all">Animes </Link>
        <Link to="/profile/current">Profile </Link>
      </nav>
    </div>
  );
}
