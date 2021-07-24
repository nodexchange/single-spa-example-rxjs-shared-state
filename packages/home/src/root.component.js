import React from "react";
import { i18n, I18nContext, ThemeProvider, nextTheme } from "@example/design-system";
import { hot } from "react-hot-loader/root";

const Root = (props) => {
  return (
    <ThemeProvider baseTheme={nextTheme} theme={{ modal: { width: 500 } }}>
      <I18nContext.Provider value={i18n.english}>
        <section style={{ textAlign: "center", padding: "1rem" }}>
          {props.name} is mounted!
          <p>hello</p>
          <p>customProp: {props.bottomlineProp}</p>
        </section>
      </I18nContext.Provider>
    </ThemeProvider>
  );
}

export default hot(Root);
