import LinkButton from './LinkButton';
import logo from '../images/Clocklogo.svg';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
const Header = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoHandler = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  // const draw = {
  //   hidden: { pathLength: 0, opacity: 0 },
  //   visible: (i) => {
  //     return {
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: {
  //         pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
  //         opacity: { duration: 0.01 },
  //       },
  //     };
  //   },
  // };

  return (
    <header className='h-header w-full flex justify-between bg-transparent'>
      <div className='bg-red w-32 t-4 align-middle flex sm:ml-20 sm:w-40 sm:align-top sm:h-14'>
        <a
          onClick={logoHandler}
          className='text-white text-xl sm:text-3xl leading-10 self-center z-30'
          href='/'
        >
          <div className='flex'>
            <img src={logo} className='m-0 p-0' alt='logo' />
            <p>ptimize</p>
          </div>
        </a>
      </div>

      {/* <div className='bg-red w-32  ml-0 t-4 align-middle flex sm:ml-20 sm:w-40 sm:align-top sm:h-14'>
        <div className='self-center'>
        </div>
        <h1 className='text-white text-xl sm:text-3xl leading-10 self-center'>
          ptimize
        </h1>
      </div> */}
      {!isLoggedIn && (
        <LinkButton to='login' btn={true}>
          Get started
        </LinkButton>
      )}
      {isLoggedIn && (
        <div className='m-4 mb-0 z-30'>
          <LinkButton to='habits'>Habits</LinkButton>
          {/* <motion.svg
            
            width='90'
            height='2'
            viewBox='0 0 90 2'
            initial='hidden'
            animate='visible'
          >
            <motion.line
              x1='00'
              y1='00'
              x2='90'
              y2='00'
              stroke='#00cc88'
              variants={draw}
              custom={2}
            />
          </motion.svg> */}
          <LinkButton to='profile'>Profile</LinkButton>
          <button
            className=' text-center m-4 mt-0 text-3xl font-extrabold text-navyblue'
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
