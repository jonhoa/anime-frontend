import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import logo from './img/logo1.png';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Header(props) { 
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // change login to logout on return
  }
  console.log('header');
  // Pass on user params to header component, changes pic from ? to user image
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
              <a><Link to="/profile/current"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX///+pqamioqKmpqbU1NTx8fGsrKzOzs6zs7Pq6uqvr6/8/Pzc3Ny7u7v39/fFxcXk5OS/v7+3t7fz8/PZ2dnHx8eOcZ+qAAAFNUlEQVR4nO2d6ZKrIBBGhyGuuEXj+7/qdUnuaBIzCo18MH3+p8pTDXQ3EP36YhiGYRiGYRiGYTCosktdtmksZ+I8bctrn9yaqHL9aAR0Rd+K0UusmF2/RZtkyvUjmlAVpXh2E8+qed24fk5dsvIldBuS8cXH4dqUu/TukqLvXD/wQbL2gN/seHH9zIdIDvpNjmnm+rF3k+XH/SbHxPWT76TQCOBd8erFinPR9RsV08j14/9ObyA4Ljjwk9FMcCAGj6LJEL1HMYXOjIWx4KDYAi83GYHgoFi79thEpSSGQhauTbYwn4R3YtCpmBH5jZnftctbVEkVwkERsmVs6ASFLBE7f8IQYgaRMoQDKV4QSUOIGESaZL8whFtOjSvuF8Aq8CqnFkRr+ClK7ifA1pqa3hCrF1bkgxRtmNKVpAvD0rXVkpuFQSpypIlInytGkPIFcUFzB2mpSW0IIhVuNpZSrM2MKrZieHPt9UNlQ1BIoPO2zo4hUMoP3zCykizY8EzYkA3Z0D3hG4afD9lQ0xCoLg2/8rbUPYVviNQfsqGeIdAuhrJjyDtRJ2LJMPwYAhmGvyPMhpqGwZ9bQJ3MtMEbhn+6dg3+hNSKIdQ9WhuXTbAMrZzjx0h39pPgDcnusC+Bum1i5T4N1MU2Cxf3hGhdWy0hvgI9gXXry8q9Nqg/B0UWNmpk79pqiZXbl0Abwl9WSm+kjaivP3BH2EbKz5FKGhuLKVay+Av/RqCfiFD7UCPkdRtUVTpCPUzhBin9MEXapJmh/fMa2ko6QborDFbQzJB2wWDpfobyqBtwnRmh3HDDW2dGgn/jAGELBXVyuISsrkldm2xB1ekjXRV6gqhLhNrsXkOTMEBTxQxNwsBMFTMRgR/WPukLFB0GWuu7xjzrw2b7B8bn3XC7F8+YtomQjeEaw9INPoSmQYSfhSNGM9GDEJotp16E0CwnIpczP+gXNliHoh/Qv12D21Ss0e0TwU59P6HX7MsW7ajiA1pp34tM8UBnsfFmmZnR2M+AO077hcPj1KsxOtId3LLxaB19cOyqmyfl2ppDeT/1JdevODAVvZuEE+rAOI0zz2KooqYv4yOjVIoyaSJP8kVU1KnY95WglePwi7Qv0C1VlrS/feHps6ZIgb9xVTV1bGC3sLw2gNNSNX1OoPeQjGswye6Skuk9JIfh6lrrgWquxHoPybJAmJLdhW50vjrmieu9qaw/lPY0JEXtcrA2V2HXb3KUV0dXM1Rx9Otx+o6pgwlZDX6n6N0l25Md1Y3oozlHHG/nOTrwmxzPGquqcOJ3mqM6d/69OJaNZcfmrPVzU1GWNvNjZqc8O+p4teUY1QB+I1L2Nmq5LrFcnx1Bxgl1c6UuQH4jMidNjw4TxDYyJVtWVeM0QWwzpA4SQYgF9D1SECyrwH4jxqkjQ0kQ20hp0CJn/QkNrjlS9HqOUe2F34jWVodHfiPDWD1W5kR+jM8lQxz3O1ZIBdp+9pdyhebn7d0zlHI7/DLQAmYfsv1tyVEX7ybgGimSj9VqZOf1gKfyMYyF5wGckWJrNio734dzgKzfjtQqgBH6QLZv8kYH2OTqI9OXly5GXib5bWT8VOF0gQmOiqsoVl6n+ffI1V05O++QdczyT2JWXl3pnp8/FFN/NRyG/1ceg8oTK/J7rRas4P1utZ0PG4AwvbzAyvtjUZiCGHIIhyAqK6+PBUIWoebCB8MwZUPPYUP/YUP/YUP/YUP/YUP/YUP/YUP/YUP/YUP/YUP/GQ2/w8a/t8IwDMMwDMMwDMM44R8gdXPyQxdoywAAAABJRU5ErkJggg==" class="rounded-circle" width ="20" height="20"/> Profile </Link></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

{/* <a class="navbar-nav mr-auto mt-2 mt-lg-0"></a> */}