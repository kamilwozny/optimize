import { useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCA87diG9xKD-1ZDuUDtDbpvSxwP9XVfqw',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      navigate('/');
    });
  };

  return (
    <Card>
      <h2 className='text-cream text-5xl font-medium text-center pb-2'>
        Change password
      </h2>
      <form onSubmit={submitHandler} className='flex flex-wrap justify-center'>
        <div className='flex flex-col flex-wrap gap-3'>
          <label className='text-cream text-4xl font-normal mt-12'>
            New Password
          </label>
          <input minLength='7' ref={newPasswordInputRef} type='password' />
        </div>
        <div className='flex justify-center flex-wrap flex-col w-full'>
          <button
            type='submit'
            className='self-center w-96 bg-red text-center rounded-3xl pt-2 pb-2 pl-4 pr-4 m-8 mt-24 text-xl font-extrabold text-white h-12'
          >
            Change password
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ProfileForm;
