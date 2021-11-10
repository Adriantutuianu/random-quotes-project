import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>@{year} - Made by Adrian Tut.</footer>;
};

export default Footer;
