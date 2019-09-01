import React, { Component } from 'react';
import HomePage from '../pages/home'
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from '../pages/shop'
import Header from '../components/header'
import SignInSignUpPage from '../pages/sign-in-sign-up'
import { auth, createUserDocument } from '../../firebase/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/actions'
class App extends Component {

  unsubscribeFromAuth = null


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserDocument(authUser)
        userRef.onSnapshot(snapShot => {
          const user = {
            id: snapShot.id,
              ...snapShot.data()
          }
          this.props.setCurrentUser(user)
        })
      } else {
        this.props.setCurrentUser(authUser)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }



  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignUpPage}/>
        </Switch>
      </Router>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
      setCurrentUser: (user)=> dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(App);
   