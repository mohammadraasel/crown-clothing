import React from 'react';
import HomePage from '../pages/home'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from '../pages/shop'
import Header from '../components/header'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </Router>
  );
}

export default App;
   