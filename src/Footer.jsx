import gitlogo from './img/github.png';
import linkedinlogo from './img/linkedin.png';
export function Footer() { 
  return (
    <div>
      <footer class="page-footer">
        <small class="footer-small">
        ©Copyright 2023. All rights reserved.
        </small>
        <ul>
          <li>
            <a href = "https://www.linkedin.com/in/jonhoarau/"><img src ={linkedinlogo} width = "30" height ="30"/></a>
          </li>
          <li>
            <a href="https://github.com/jonhoa"><img src ={gitlogo} width = "30" height ="30"/></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
