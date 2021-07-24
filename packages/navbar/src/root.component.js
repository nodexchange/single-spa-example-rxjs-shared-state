import React from "react";
import { hot } from "react-hot-loader/root";

const Root = (props) => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
        <ul>
          <li>
          <a href='/home'>Home</a>
          </li>
          <li>
          <a href='/login'>Login</a>
          </li>
          <li>
          <a href='/'>root</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default hot(Root);
