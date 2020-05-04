/* jshint esversion:9 */

import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/4.4 crown.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      <Link>
        {
          currentUser ? 
          <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
          :
          <Link className='option' to='/signin'>Sign In</Link>
        }
      </Link>
    </div>
  </div>
)


export default Header;
