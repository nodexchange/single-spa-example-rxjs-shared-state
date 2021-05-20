import React from "react";
import { nextTheme, ThemeProvider } from "@glu/theming";

import { hot } from "react-hot-loader/root";
import Header from "./header.component";

import I18nContext from './contexts/I18n';
import { i18n } from './utils/i18n';


const Root = (props) => {
  return (
    <div>
      <p>Design System demo working?</p>
      <p>Our docs could go here</p>
      <p>I.e. how to import into your project, etc</p>
      <I18nContext.Provider value={i18n.english}>
        <ThemeProvider baseTheme={nextTheme} theme={{ modal: { width: 500 } }}>
          <Header />
        </ThemeProvider>,
      </I18nContext.Provider>
    </div>
  );
};

export default hot(Root);
