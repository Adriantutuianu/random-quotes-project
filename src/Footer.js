import React from "react";
import "./footer.css";

const Footer = ({ name }) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      @{year} - Made by {name}.
    </footer>
  );
};

export default Footer;
