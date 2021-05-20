import { Router } from '@reach/router';
import React from 'react';
import Home from '../app/Home';

const AppRouter = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default AppRouter;
