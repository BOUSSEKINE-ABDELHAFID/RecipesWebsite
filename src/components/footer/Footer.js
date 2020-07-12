import React from "react";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
} from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <a href="https://www.facebook.com">
          <RiFacebookCircleLine className="socialIcons" />
        </a>
        <a href="https://www.twitter.com">
          <RiTwitterLine className="socialIcons" />
        </a>
        <a href="https://www.instagram.com">
          <RiInstagramLine className="socialIcons" />
        </a>
      </div>
      <div>
        <footer>
          Copyright &copy; {new Date().getFullYear()}
          <span> {""}phone.com</span>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
