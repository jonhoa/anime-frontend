import { Link } from "react-router-dom";
import { Login } from "./Login";

export function Header() { 
  return (
    <div>
      <header>
        <Link to="/home">Home </Link>
        <Link to="/login">Login </Link>
        <Link to="/signup">Signup </Link>
        <Link to="/all">Animes </Link>
      </header>
    </div>
  );
}
