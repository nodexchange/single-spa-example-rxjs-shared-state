import React from "react";
// import { PtxButton, PtxThemeProvider, PtxNextTheme } from "@example/design-system";

const Footer = (props) => {
  return (
      <div>
        <div className="navbar">
          <div className="navbar-content">
            <ul>
              <li>
                <a href='/home'><Button text="HOME" /></a>
              </li>
              <li>
                <a href='/login'><Button text="LOGIN" /></a>
              </li>
              <li>
                <a href='/'><Button text="ROOT" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Footer;
