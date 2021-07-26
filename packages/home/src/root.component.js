import React from "react";
import { I18nContext, ThemeProvider, nextTheme, i18n } from "@example/design-system";
import { Button, CustomButton } from '@example/design-system';
import Grid from './components/grid/Grid';

const Home = (props) => {
  return (
    <ThemeProvider baseTheme={nextTheme} theme={{ modal: { width: 500 } }}>
      <I18nContext.Provider value={i18n.english}>
        <CustomButton text={'hello home'} />
        <section style={{ textAlign: "center", padding: "1rem" }}>
          <Grid />
          <p>Hello</p>
          {props.name} is mounted today?!
          <Button text={'Glu'} />
          <p>hello now? fast?</p>
          <p>customProp: {props.bottomlineProp}</p>
        </section>
      </I18nContext.Provider>
    </ThemeProvider>
  );
}

export default Home;
