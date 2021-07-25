import { createContext } from 'react';
import { defaultStrings as gridDefaultStrings } from '@glu/grid-react';
import { defaultStrings as dataComponentsDefaultStrings } from '@glu/data-components';
import gluLocale from '@glu/locale';
import { defaultStrings as validationDefaultStrings, validators } from '@glu/validation-react';

export default createContext();

/**
 * Locale has to be set to make some of the Glu components work (eg. grid).
 * This is not ideal because it won't update if the locale context updates,
 * ie. we'll have to force re-render the whole application and update this
 * if the locale changes.
 */
gluLocale.set({
  ...gridDefaultStrings,
  ...validationDefaultStrings,
  ...dataComponentsDefaultStrings,

  noRowsToShow: 'No data',
  validator: {
    required: 'Required'
  }
});
validators.messages = validators.initMessages();
