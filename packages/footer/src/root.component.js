import React from "react";
import { design } from "@example/utils";
import { hot } from "react-hot-loader/root";
import DesignSystem from "./design.system";

const Root = (props) => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">

          <p className="footer-text">
            2 Copyright © 2021 Bottomline Technologies (de), Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hot(Root);
