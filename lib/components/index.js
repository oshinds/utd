import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Welcome from 'Welcome';

const App = ({ match }) => (
  <Switch>
    <Route path='/' component={Welcome}/>
  </Switch>
)

render(
 <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);