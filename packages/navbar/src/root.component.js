import React from "react";
import { hot } from "react-hot-loader/root";
import { ThemeProvider, nextTheme } from "@example/design-system";
import { Button } from "@example/design-system";

const Root = (props) => {
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
                <a href='/'><Button text="ROOT" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default hot(Root);
