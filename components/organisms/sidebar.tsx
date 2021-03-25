import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../molecules/logo';

export { Sidebar };

function Sidebar() {
  return (
    <nav className='flex p-4 flex-shrink-0 flex-col items-center leading-8'>
      <Logo/>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
