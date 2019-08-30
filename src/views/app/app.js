import React, { Component } from 'react';
import HomePage from '../pages/home'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from '../pages/shop'
import Header from '../components/header'
import SignInSignUpPage from '../pages/sign-in-sign-up'
import { auth, createUserDocument } from '../../firebase/firebase'
class App extends Component {

  state = {
    currentUser: null
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserDocument(authUser)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: authUser})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }



  render() {
    return (
      <Router>
        <Header authUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignUpPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
   