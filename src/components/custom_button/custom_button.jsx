/* jshint esversion:9 */

import React from 'react';

import './custom_button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom_button`} {...otherProps}>
    { children }
  </button>
)

export default CustomButton;
