import { useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const Modal = ({ setOpenModal }) => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const repeatNewPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    const enteredRepeatedNewPassword = repeatNewPasswordInputRef.current.value;
    if (enteredNewPassword === enteredRepeatedNewPassword) {
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
    } else {
      alert('Passwords does not match.');
    }
  };
  return (
    <>
      <div
        className='w-full h-full bg-black opacity-75 absolute left-0 top-0'
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div
        className={`bg-navyblue absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-4 m-auto w-[600px] h-[400px]`}
      >
        <h2 className='text-cream text-5xl font-medium text-center pb-2'>
          Change password
        </h2>
        <form onSubmit={submitHandler} className='flex flex-col justify-center'>
          <div className='flex flex-col flex-wrap mt-4'>
            <Input
              placeholder='Enter new password'
              label='New Password'
              required
              ref={repeatNewPasswordInputRef}
              type='password'
              id='pwd'
              minLength='7'
            />
          </div>
          <div className='flex flex-col flex-wrap mt-4'>
            <Input
              placeholder='Repeat new password'
              label='Repeat New Password'
              required
              ref={newPasswordInputRef}
              type='password'
              id='repeatpwd'
              minLength='7'
            />
          </div>
          <div className='flex justify-center flex-wrap flex-col w-full'>
            <button
              type='submit'
              className='self-center w-96 bg-red text-center rounded-3xl pt-2 pb-2 pl-4 pr-4 m-8 mt-10 text-xl font-extrabold text-white h-12'
            >
              Change password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
