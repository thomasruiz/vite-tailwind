import React from 'react';
import logo from './logo.svg';

export { LogoImage };

function LogoImage() {
  return <img src={logo} height={64} width={64} alt='Logo'/>;
}