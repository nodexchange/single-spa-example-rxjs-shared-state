import React from "react";
import { I18nContext, ThemeProvider, nextTheme, i18n } from "@example/design-system";
import { Button, CustomButton } from '@example/design-system';

const Home = (props) => {
  return (
    <ThemeProvider theme={{ modal: { width: 500 } }}>
      <I18nContext.Provider value={i18n.english}>
        <CustomButton text={'hello home'} />
        <section style={{ textAlign: "center", padding: "1rem" }}>
          {props.name} is mounted today?!
          <Button text={'Glu button'} />
          <p>hello</p>
          <p>customProp: {props.bottomlineProp}</p>
        </section>
      </I18nContext.Provider>
    </ThemeProvider>
  );
}

export default Home;
