import Card from './Card';
import { useState } from 'react';
import line from '../images/line1.svg';
const Form = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCA87diG9xKD-1ZDuUDtDbpvSxwP9XVfqw',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Auth fail';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            //handle custom error messages
          });
        }
      });
    }
  };

  return (
    <>
      <Card>
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
            <label className='text-cream text-4xl font-normal '>Email</label>
            <input
              type='email'
              className='w-80'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='text-cream text-4xl font-normal'>Password</label>
            <input
              type='password'
              className='w-80'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-center flex-wrap flex-col'>
            {!isLoading && (
              <button
                type='submit'
                className='w-96 bg-red text-center rounded-3xl pt-2 pb-2 pl-4 pr-4 m-8 text-xl font-extrabold text-white h-12'
              >
                {!isLogin ? 'Create account' : 'Login'}
              </button>
            )}
            {isLoading && <p>Sending data to the server</p>}
            <button
              type='button'
              className='w-full text-center rounded-3xl text-xl font-extrabold text-white self-center'
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Form;
