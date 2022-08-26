import { useState, useContext, useEffect } from 'react';
import line from '../../images/line1.svg';
import AuthContext from '../../store/auth-context';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../Input';
const Form = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  useEffect(() => {
    if (location.state === null) {
      return;
    }
    if (location.state.logInfo === false) {
      setIsLogin(false);
    }
  }, [location]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCA87diG9xKD-1ZDuUDtDbpvSxwP9XVfqw';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCA87diG9xKD-1ZDuUDtDbpvSxwP9XVfqw';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Auth fail';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString(), data.localId);
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div
        className={`bg-navyblue mt-72 rounded-3xl p-4 m-auto w-[600px] h-[400px]`}
      >
        <div>
          <h2 className='text-cream text-5xl font-medium text-center pb-2'>
            {!isLogin ? 'Join the adventure' : 'Login'}
          </h2>
          {!isLogin ? (
            <img
              src={line}
              alt='underline header'
              className='absolute top-14 left-64 scale-75'
            />
          ) : (
            <img
              src={line}
              alt='underline header'
              className='absolute top-14 right-40 scale-50'
            />
          )}
        </div>
        <form
          className='flex flex-wrap justify-center'
          onSubmit={submitHandler}
        >
          <div className='flex flex-col flex-wrap gap-3'>
            <Input
              placeholder='Enter email'
              label='Email'
              required
              id='emailLogin'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='Enter password'
              label='Password'
              required
              type='password'
              id='pwdLogin'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-center flex-wrap flex-col w-full'>
            {!isLoading && (
              <button
                type='submit'
                className='self-center w-96 bg-red text-center rounded-3xl pt-2 pb-2 pl-4 pr-4 m-8 mb-4 text-xl font-extrabold text-white h-12'
              >
                {isLogin ? 'Login' : 'Create account'}
              </button>
            )}
            {isLoading && (
              <p className='w-full text-center text-white'>
                Sending data to the server
              </p>
            )}
            <button
              type='button'
              className='w-full text-center rounded-3xl text-xl font-extrabold text-white self-center'
              onClick={switchAuthModeHandler}
            >
              {!isLogin ? 'Login with existing account' : 'Create new account'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
