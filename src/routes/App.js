import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/favorites" component={Favorites}/>
    </Switch>
  </BrowserRouter>
)

export default App;
