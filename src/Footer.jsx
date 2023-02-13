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
          <a href = "https://www.linkedin.com/in/jonhoarau/"><img src ={linkedinlogo} width = "30" height ="30"/></a><br/>
          <a href="https://github.com/jonhoa"><img src ={gitlogo} width = "30" height ="30"/></a>
        </ul>
      </footer>
    </div>
  );
}
