import { Link } from "react-router-dom";
import { Login } from "./Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Header() { 
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand"> <Link to="/home" class="nav-link">Home </Link></a>
        <a class="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link to="/login">Login </Link>
        </a>
        <Link to="/signup">Signup </Link>
        <Link to="/all">Animes </Link>
        <Link to="/profile/current">Profile </Link>
      </nav>
    </div>
  );
}
