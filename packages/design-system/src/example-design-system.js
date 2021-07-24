import React from "react";

import { Button } from '@glu/buttons-react';
import { GridLoading, ComposedGrid } from '@glu/grid-react';
import { nextTheme, ThemeProvider } from "@glu/theming";

import I18nContext from './contexts/i18n';
import { i18n } from './utils/i18n';

// export {
//   Button,
//   ComposedGrid,
//   GridLoading,
//   I18nContext,
//   i18n,
//   nextTheme,
//   ThemeProvider
// };

export { Button };
export { ThemeProvider };
export { nextTheme };
export { I18nContext };
export { i18n };

export const CustomButton = ({text}) => (<button>{text}</button>)
