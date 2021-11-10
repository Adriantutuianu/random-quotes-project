import React from "react";
import "./footer.css";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      @{year} - Made by {props.name}.
    </footer>
  );
};

export default Footer;
