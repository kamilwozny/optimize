import logo from '../images/clock1.svg';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../store/auth-context';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState();
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  let innerWidth = window.innerWidth;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);
  useEffect(() => {
    setPath(location.pathname);
    if (path === '/login') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [location, path]);

  const logoHandler = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  const headerHandler = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      {width < 720 && (
        <nav className='h-header w-full flex items-start top-0 left-0 right-0 fixed justify-between bg-white z-40'>
          <div className=' p-4 flex'>
            <a
              onClick={logoHandler}
              className='text-red text-4xl sm:text-3xl leading-10 self-center z-30'
              href='/'
            >
              <div className='flex'>
                <img src={logo} className='m-0 p-0 pr-1 w-10 h-10' alt='logo' />
                <p>ptimize</p>
              </div>
            </a>
          </div>
          {isLoggedIn && (
            <>
              <button
                onClick={headerHandler}
                className={`${open && 'text-white'} ${
                  !open && 'text-navyblue'
                } p-4 scale-150 m-4 focus:outline-none outline-none z-[60] bg-transparent`}
              >
                <div className='w-5'>
                  <span
                    className={`${open && 'rotate-45 -translate-y-0'}
                      ${!open && '-translate-y-1.5'}
                     block absolute h-[3px] w-5 bg-current transform transition duration-500 ease-in-out`}
                  ></span>
                  <span
                    className={`${
                      open && 'opacity-0'
                    } block absolute h-[3px] w-5 bg-current transform transition duration-500 ease-in-out `}
                  ></span>
                  <span
                    className={`${open && '-rotate-45 translate-y-0'}
                      ${!open && 'translate-y-1.5'}
                     block absolute h-[3px] w-5 bg-current transform transition duration-500 ease-in-out `}
                  ></span>
                </div>
              </button>
              <div
                className={`${open && 'right-0'} ${
                  !open && '-right-full'
                } transition-all absolute top-0  w-1/2 h-[100vh] bg-navyblue z-50`}
              >
                <div className='mt-24 relative w-full h-full flex flex-col'>
                  <NavLink
                    to='/dashboard'
                    style={({ isActive }) => ({
                      background: isActive
                        ? 'rgb(168 218 220)'
                        : 'rgb(29 53 87)',
                    })}
                    className='w-full py-4 text-center text-xl font-extrabold text-white z-30'
                  >
                    <span className='inline-block'>Dashboard</span>
                  </NavLink>
                  <NavLink
                    to='/habits'
                    style={({ isActive }) => ({
                      background: isActive
                        ? 'rgb(168 218 220)'
                        : 'rgb(29 53 87)',
                    })}
                    className='w-full text-xl py-4 text-center font-extrabold text-white z-30'
                  >
                    <span className='inline-block'>Habits</span>
                  </NavLink>
                  <button
                    onClick={logoutHandler}
                    className='text-xl py-4 text-center font-extrabold text-white z-30'
                  >
                    <span className='inline-block'>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
          {!isLoggedIn && (
            <div className='mt-4 mb-2 h-10 z-30 relative overflow-hidden flex justify-center items-center'>
              <NavLink
                to={!login && 'login'}
                style={({ isActive }) => ({
                  background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
                })}
                className='w-32 bg-navyblue rounded-3xl py-[5px] pl-6 pr-6 m-3 mb-4 text-xl font-extrabold text-white z-30 before:content-login before:absolute before:left-[64px] before:transition-all before:-top-full hover:before:top-2 text-center before:w-6 group before:h-6'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Login
                </span>
              </NavLink>
            </div>
          )}
        </nav>
      )}

      {width > 720 && (
        <nav className='h-header w-full flex top-0 left-0 right-0 fixed justify-between bg-white z-40'>
          <div className='p-4 flex self-start'>
            <a
              onClick={logoHandler}
              className='text-red text-4xl sm:text-3xl leading-10 self-center z-30'
              href='/'
            >
              <div className='flex'>
                <img src={logo} className='m-0 p-0 pr-1 w-10 h-10' alt='logo' />
                <p>ptimize</p>
              </div>
            </a>
          </div>
          {!isLoggedIn && (
            <div className='mt-4 mb-2 h-10 z-30 relative overflow-hidden flex justify-center items-center'>
              <NavLink
                to={!login && 'login'}
                style={({ isActive }) => ({
                  background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
                })}
                className='w-32 bg-navyblue rounded-3xl py-[5px] pl-6 pr-6 m-3 mb-4 text-xl font-extrabold text-white z-30 before:content-login before:absolute before:left-[64px] before:transition-all before:-top-full hover:before:top-2 text-center before:w-6 group before:h-6'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Login
                </span>
              </NavLink>
            </div>
          )}
          {isLoggedIn && (
            <div className='mt-4 mb-2 h-10 z-30 relative overflow-hidden'>
              <NavLink
                to='/dashboard'
                style={({ isActive }) => ({
                  background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
                })}
                className='before:content-dashboard before:absolute before:left-[64px] before:transition-all before:-top-full hover:before:top-2 before:w-6 group before:h-6 w-96 rounded-3xl p-2 pl-6 pr-6 mx-1 text-xl font-extrabold text-white z-30 overflow-hidden'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Dashboard
                </span>
              </NavLink>
              <NavLink
                to='/habits'
                style={({ isActive }) => ({
                  background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
                })}
                className='before:content-list before:absolute before:left-[196px] before:transition-all before:-top-full hover:before:top-2 before:w-6 group before:h-6 w-96 rounded-3xl p-2 pl-6 pr-6 mx-1 text-xl font-extrabold text-white z-30 overflow-hidden'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Habits
                </span>
              </NavLink>
              <button
                onClick={logoutHandler}
                className='w-32 bg-navyblue rounded-3xl py-[5px] pl-6 pr-6 ml-1 mr-5 text-xl font-extrabold text-white z-30 before:content-logout before:absolute before:left-[320px] before:transition-all before:-top-full hover:before:top-2 before:w-6 group before:h-6'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Logout
                </span>
              </button>
            </div>
          )}
        </nav>
      )}
    </>
  );

  // return (
  //   <nav className='h-header w-full flex top-0 left-0 right-0 fixed justify-between bg-white z-40'>
  //     <div className='p-4 flex self-start'>
  //       <a
  //         onClick={logoHandler}
  //         className='text-red text-4xl sm:text-3xl leading-10 self-center z-30'
  //         href='/'
  //       >
  //         <div className='flex'>
  //           <img src={logo} className='m-0 p-0 pr-1 w-10 h-10' alt='logo' />
  //           <p>ptimize</p>
  //         </div>
  //       </a>
  //     </div>
  //     {!isLoggedIn && (
  //       <div className='mt-4 mb-2 h-10 z-30 relative overflow-hidden flex justify-center items-center'>
  //         <NavLink
  //           to={!login && 'login'}
  //           style={({ isActive }) => ({
  //             background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
  //           })}
  //           className='w-32 bg-navyblue rounded-3xl py-[5px] pl-6 pr-6 m-3 mb-4 text-xl font-extrabold text-white z-30 before:content-login before:absolute before:left-[64px] before:transition-all before:-top-full hover:before:top-2 text-center before:w-6 group before:h-6'
  //         >
  //           <span className='inline-block group-hover:translate-y-[300%] transition-all'>
  //             Login
  //           </span>
  //         </NavLink>
  //       </div>
  //     )}
  //     {isLoggedIn && (
  //       <div className='mt-4 mb-2 h-10 z-30 relative overflow-hidden'>
  //         <NavLink
  //           to='/dashboard'
  //           style={({ isActive }) => ({
  //             background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
  //           })}
  //           className='before:content-dashboard before:absolute before:left-[64px] before:transition-all before:-top-full hover:before:top-2 before:w-6 group before:h-6 w-96 rounded-3xl p-2 pl-6 pr-6 mx-1 text-xl font-extrabold text-white z-30 overflow-hidden'
  //         >
  //           <span className='inline-block group-hover:translate-y-[300%] transition-all'>
  //             Dashboard
  //           </span>
  //         </NavLink>
  //         <NavLink
  //           to='/habits'
  //           style={({ isActive }) => ({
  //             background: isActive ? 'rgb(168 218 220)' : 'rgb(29 53 87)',
  //           })}
  //           className='before:content-list before:absolute before:left-[196px] before:transition-all before:-top-full hover:before:top-2 before:w-6 group before:h-6 w-96 rounded-3xl p-2 pl-6 pr-6 mx-1 text-xl font-extrabold text-white z-30 overflow-hidden'
  //         >
  //           <span className='inline-block group-hover:translate-y-[300%] transition-all'>
  //             Habits
  //           </span>
  //         </NavLink>
  //         <button
  //           onClick={logoutHandler}
  //           className='w-32 bg-navyblue rounded-3xl py-[5px] pl-6 pr-6 ml-1 mr-5 text-xl font-extrabold text-white z-30 before:content-logout before:absolute before:left-[320px] before:transition-all before:-top-full hover:before:top-2 before:w-6 group before:h-6'
  //         >
  //           <span className='inline-block group-hover:translate-y-[300%] transition-all'>
  //             Logout
  //           </span>
  //         </button>
  //       </div>
  //     )}
  //   </nav>
  // );
};

export default Header;
