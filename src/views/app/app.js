import React from 'react';
import HomePage from '../pages/home'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
   