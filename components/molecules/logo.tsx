import React from 'react';
import { Link } from 'react-router-dom';
import { LogoImage } from '../atoms/logo-image';

export { Logo };

function Logo() {
  return (
    <div className='mt-5 mb-5'>
      <Link to="/"><LogoImage/></Link>
    </div>
  );
}
