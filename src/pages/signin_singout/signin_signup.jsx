/* jshint esversion:9 */

import React from 'react';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/sign_up/sign_up';

import './signin_signup.scss';

const SignInSignUpPage = () => (
  <div className='signin_singup'>
    <SignIn />
    <SignUp />
  </div>
);



export default SignInSignUpPage;
