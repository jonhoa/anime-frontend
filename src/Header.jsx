import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import logo from './img/logo1.png';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { fetchProfile } from "./api/fetchProfile";

export function Header() { 
  const jwt = localStorage.getItem("jwt");
  let loggedin = false;
  if (jwt) {
    // change login to logout on return
    loggedin = true;
  }
  console.log('header');
  // Pass on user params to header component, changes pic from ? to user image
  const profilePic = fetchProfile();
  console.log(profilePic["pic"]);

 let link = ""
  if (loggedin) {
    link = <Logout/>
  }else {
  link = <Link to="/login">Login </Link>
  }

  return (
    <div>
      <header class ="page-header">
        <nav>
          <h2 class="logo-main">
            <a><Link to="/home" class="nav-link"><img src={logo} width="150em" height ="40em"/> </Link></a></h2>
          <ul>
            <li>
              <a>{link}</a>
            </li>
            <li>
              {/* <a><Logout/></a> */}
            </li>
            <li>
              <a><Link to="/signup">Signup </Link></a>
            </li>
            <li>
              <a><Link to="/all">Animes </Link></a>
            </li>
            <li>
              <a><Link to="/profile/current"><img src={profilePic["pic"]} class="rounded-circle" width ="20" height="20"/> Profile </Link></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

{/* <a class="navbar-nav mr-auto mt-2 mt-lg-0"></a> */}