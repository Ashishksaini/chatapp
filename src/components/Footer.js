import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer--container">
      <div className="footer">
        <div className="footer--div1">
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <hr />
        <div className="footer--div2">
          <h1>Team Members</h1>
          <ul>
            <li>Ashish Kumar Saini</li>
            <li>Divya Sharma</li>
            <li>Dheeraj Jain</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer--end">
        <h4>Stay connected</h4>
        <div className="footer--icons">
          <GitHubIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
