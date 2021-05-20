const mainStyles = {
  fontSize: 50,
  fontFamily: '"Barlow Condensed", "Roboto", sans-serif',
  fontWeight: 'normal'
};

const headlineStyles = {
  fontSize: 30,
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 500
};

export default {
  main: mainStyles,
  h1: mainStyles,
  headline: headlineStyles,
  h2: headlineStyles,
  h3: {
    fontSize: 20,
    fontFamily: '"Roboto Condensed", "Roboto", sans-serif',
    fontWeight: 'normal'
  },
  h4: {
    fontSize: 20,
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 500
  },
  h5: {
    fontSize: 16,
    fontFamily: '"Roboto Condensed", "Roboto", sans-serif',
    fontWeight: 700
  },
  text: {
    fontSize: 16,
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 'normal'
  },
  label: {
    fontSize: 13,
    maxWidth: '100%',
    marginBottom: 0,
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  readOnlyInput: {
    padding: 0,
    margin: 0,
    minHeight: 34
  }
};
