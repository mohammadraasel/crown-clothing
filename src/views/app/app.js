import React from 'react';
import HomePage from '../pages/home'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from '../pages/shop'
import Header from '../components/header'
import SignInSignUpPage from '../pages/sign-in-sign-up'
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUpPage}/>
      </Switch>
    </Router>
  );
}

export default App;
   