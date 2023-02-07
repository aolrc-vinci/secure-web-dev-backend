//Connecting pages

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './loginpage';
import Register from './registerpage';
import Locations from './locationpage'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/location" component={Locations} />
    </Router>
  );
};

export default App;
