import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import logo from './img/logo1.png';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Header() { 
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // change login to logout on return
  }
  return (
    <div>
      <header class ="page-header">
        <nav>
          <h2 class="logo-main">
            <a><Link to="/home" class="nav-link"><img src={logo} width="150em" height ="40em"/> </Link></a></h2>
          <ul>
            <li>
              <a><Link to="/login">Login </Link></a>
            </li>
            <li>
              <a><Logout/></a>
            </li>
            <li>
              <a><Link to="/signup">Signup </Link></a>
            </li>
            <li>
              <a><Link to="/all">Animes </Link></a>
            </li>
            <li>
              <a><Link to="/profile/current"><img src="https://www.seekpng.com/png/detail/145-1457681_question-mark-png-question-mark-hover-icon.png" class="rounded-circle" width ="30" height="30"/> Profile </Link></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

{/* <a class="navbar-nav mr-auto mt-2 mt-lg-0"></a> */}