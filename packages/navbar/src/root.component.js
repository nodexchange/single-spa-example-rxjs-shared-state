import React from "react";
import { ThemeProvider,  Button, nextTheme } from "@example/design-system";

const NavBar = (props) => {
  return (
      <div>
        <ThemeProvider theme={{ modal: { width: 500 } }}>
          <div className="navbar">
            <div className="navbar-content">
              <ul>
                <li>
                  <a href='/home'><Button text={'Home'} /></a>
                </li>
                <li>
                  <a href='/login'><Button text={'Login'} /></a>
                </li>
                <li>
                  <a href='/'><Button text={'Root'} /></a>
                </li>
                <li>
                  <a href='/auth'><Button text={'Auth'} /></a>
                </li>
              </ul>
            </div>
          </div>
        </ThemeProvider>
      </div>
  );
};

export default NavBar;
