import Card from './Card';
import LinkButton from './LinkButton';
import { useEffect, useState } from 'react';
const Form = () => {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  useEffect(() => {
    if (name.length > 3 && isValidEmail(email)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [name, email]);

  return (
    <>
      <Card>
        <h2 className='text-cream text-5xl font-medium text-center pb-10'>
          Join the adventure
        </h2>
        <form className='flex flex-wrap justify-center'>
          <div className=''>
            <label className='text-cream text-4xl pl-10 pr-10 font-normal '>
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              className='w-80 ml-10 mr-2'
            />
          </div>
          <div>
            <label className='text-cream text-4xl font-normal pt-10 pl-10 pr-10 pb-4'>
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              className='w-80 mt-10 ml-10 mr-2 mb-4'
            />
          </div>
          <p className='w-full text-center text-white font-semibold text-lg'>
            0/2
          </p>
          <div className='w-full'>
            <div className='w-60 rounded-3xl bg-cream h-2 m-auto'></div>
          </div>
          {check && (
            <LinkButton to='loginsecond' color='red'>
              Next
            </LinkButton>
          )}
        </form>
      </Card>
    </>
  );
};

export default Form;
