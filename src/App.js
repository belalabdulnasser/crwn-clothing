/* jshint esversion:9 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage_component';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SigninSignout from './pages/signin_singout/signin_signout';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor() {
    super();
    this.unsubscribeFromAuth = this.unsubscribeFromAuth.bind(this);
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth() {
    return null;
    console.log(this);
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninSignout} />
        </Switch>
      </div>
    );
  }
}

export default App;

