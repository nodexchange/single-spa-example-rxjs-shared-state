import React from "react";
import { design } from "@example/utils";
import { hot } from "react-hot-loader/root";
import DesignSystem from "./design.system";

const Root = (props) => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <DesignSystem />
          <p>Hello Mr Shpetim</p>
          <p className="footer-text">
            Copyright © 2021 Bottomline Technologies (de), Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hot(Root);
