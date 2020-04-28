import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ApisDocs from '../pages/ApisDocs';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/dev/api' component={ApisDocs}></Route>
    </Switch>
  );
}

export default Main;