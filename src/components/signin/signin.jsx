/* jshint esversion:9 */

import React from 'react';

import './signin.scss';
import FormInput from '../form_input/form_input';
import CustomButton from '../custom_button/custom_button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange (event) {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return(
      <div className='signin'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            handleChange={this.handleChange} 
            value={this.state.email} 
            label='email'
            required 
            />
          
          <FormInput 
            name='password'
            type='password' 
            handleChange={this.handleChange} 
            value={this.state.password} 
            label='password' 
            required 
            />

          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in With Google</CustomButton>
          </div>
          
        </form>

      </div>
    );
  }

}

export default SignIn;
