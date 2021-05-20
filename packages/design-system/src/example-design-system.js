import React from "react";

import Typography from './components/typography/Typography';

export function PtxTypography(props) {
  return (
    <div>
      <Typography variant="main">Props received: {props.text}</Typography>
    </div>
  )
};
