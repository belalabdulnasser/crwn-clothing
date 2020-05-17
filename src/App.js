/* jshint esversion:9 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage_component';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUpPage from './pages/signin_singout/signin_signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor() {
    super();
    this.unsubscribeFromAuth = this.unsubscribeFromAuth.bind(this);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth() {
    return null;
    // console.log(this);
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            // console.log(this.state); // as callback function to wait until [await finish]
          });

        });

      } else {
        this.setState({ currentUser: userAuth });
      }

      // console.log(userAuth);
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
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

