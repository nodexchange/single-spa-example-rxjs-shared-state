import React from "react";
import { ThemeProvider, nextTheme } from "@example/design-system";
import { design } from "@example/utils";
import { hot } from "react-hot-loader/root";
import DesignSystem from "./design.system";

const Root = (props) => {
  return (
    <ThemeProvider baseTheme={nextTheme} theme={{ modal: { width: 500 } }}>
      <div className="footer">
        <div className="footer-content">
          <DesignSystem />
          <p className="footer-text">
            And the root Copyright © 2021 Bottomline Technologies (de), Inc.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default hot(Root);
