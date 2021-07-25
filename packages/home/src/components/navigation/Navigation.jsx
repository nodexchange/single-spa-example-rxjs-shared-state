import SideNav from '@glu/side-nav';
import { Link } from '@reach/router';
import React from 'react';
import bt from './bt';
import btLarge from './btLarge';

const Navigation = () => (
  <SideNav
    openLogo={btLarge}
    closedLogo={bt}
    navLinks={[
      { children: 'Home', to: '/' }
    ]}
    LinkComponent={Link}
  />
);

export default Navigation;
