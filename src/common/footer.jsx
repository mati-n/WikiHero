import React, { Component } from "react";
import "./style/footer.css";
const Footer = props => {
  return (
    <div className="footer">
      <p className="footer_text">
        This project is part of{" "}
        <a href="http://www.matinnikookar.ir" target="_blank">
          @MatinNikookar
        </a>{" "}
        website
      </p>
    </div>
  );
};

export default Footer;
