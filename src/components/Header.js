import LinkButton from './LinkButton';
import logo from '../images/Clocklogo.svg';
import { useState, useEffect } from 'react';
const Header = ({ showLogo }) => {
  const [onlyLogo, setOnlyLogo] = useState(false);
  useEffect(() => {
    showLogo && setOnlyLogo(true);
  }, [showLogo]);
  return (
    <header className='h-header w-full flex justify-between bg-transparent'>
      <div className='bg-red w-32  ml-0 t-4 align-middle flex sm:ml-20 sm:w-40 sm:align-top sm:h-14'>
        <div className='self-center'>
          <img src={logo} className='m-0 p-0' alt='logo' />
        </div>
        <h1 className='text-white text-xl sm:text-3xl leading-10 self-center'>
          ptimize
        </h1>
      </div>
      {!onlyLogo && (
        <LinkButton to='login' color='navyblue'>
          Get started
        </LinkButton>
      )}
    </header>
  );
};

export default Header;
