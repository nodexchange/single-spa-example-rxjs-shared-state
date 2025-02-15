import React from "react";
import { ThemeProvider } from "@example/design-system";
import { Button } from "@example/design-system";

const Footer = (props) => {
  return (
    <ThemeProvider>
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
                <a href='/'><Button text="MAIN" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
