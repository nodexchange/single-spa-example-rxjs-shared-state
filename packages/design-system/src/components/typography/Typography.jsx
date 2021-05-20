import { withStyles } from '@glu/theming';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Typography.styles';

const tags = {
  main: 'h1',
  headline: 'h2',
  text: 'p',
  label: 'p',
  readOnlyInput: 'p'
};

const Typography = ({ classes, variant, ...rest }) => {
  const Tag = tags[variant] || variant;
  return (
    <Tag className={classes[variant]} {...rest} />
  );
};

Typography.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(['main', 'h1', 'headline', 'h2', 'h3', 'h4', 'h5', 'text', 'label', 'readOnlyInput'])
};

Typography.defaultProps = {
  variant: 'text'
};

export default withStyles(styles)(Typography);
