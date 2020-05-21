/* jshint esversion:9 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage_component';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUpPage from './pages/signin_singout/signin_signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user_actions';

class App extends React.Component {
  
  constructor() {
    super();
    this.unsubscribeFromAuth = this.unsubscribeFromAuth.bind(this);
  }

  unsubscribeFromAuth() {
    return null;
    // console.log(this);
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser ({
            id: snapshot.id,
            ...snapshot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

