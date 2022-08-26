import Modal from '../components/Modal';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../store/auth-context';
import { getAllUserHabits } from '../store/lib/api';
import useHttp from '../store/lib/hooks/use-http';
import { Link } from 'react-router-dom';
import arrow from '../images/arrowDown.svg';

const ProfileInfo = () => {
  const { sendRequest, status, data } = useHttp(getAllUserHabits, true);
  const ctx = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === 'pending') {
    return <div>Sending request...</div>;
  }
  return (
    <>
      <div
        className={`bg-navyblue rounded-3xl p-4 m-auto mt-48 w-1/2 flex z-40 mb-20 flex-col items-start`}
      >
        <h1 className='text-white font-bold text-2xl mb-4'>Habits Info</h1>
        <div className='flex justify-start gap-6 mb-3 border-b-2 border-solid border-red'>
          <h1 className='text-white font-semibold'>Total habits (today): </h1>
          <span className='text-white font-semibold'>{ctx.habitsCount}</span>
        </div>
        <div className='flex justify-start gap-6 mb-3 border-b-2 border-solid border-red'>
          <h1 className='text-white font-semibold pb-2'>Habits list: </h1>
          <ul className='text-white'>
            {data.map((habit) => {
              return <li key={habit.habit}>{habit.habit}</li>;
            })}
            <Link
              to='/dashboard'
              className='flex border-t-2 border-white border-solid'
            >
              <span>Explore more habits</span>
              <img src={arrow} alt='toggle' className=' w-7 h-7 -rotate-90' />
            </Link>
          </ul>
        </div>
        <div className='flex justify-start gap-6 mb-3 border-b-2 border-solid border-red'>
          <h1 className='text-white font-semibold'>Streak day: </h1>
          <span className='text-white font-semibold'>12</span>
        </div>
        <h1 className='text-white font-bold text-2xl mb-4'>User Info</h1>
        <div className='flex justify-start gap-6 mb-3 border-b-2 border-solid border-red'>
          <h1 className='text-white font-semibold'>User email: </h1>
          <span className='text-white font-semibold'>test123@test.com</span>
        </div>
        <div className='flex justify-start gap-6 mb-3 border-b-2 border-solid border-red'>
          <h1 className='text-white font-semibold py-2'>Password: </h1>
          <button
            className='bg-red text-white p-2 rounded-3xl mb-1'
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Change password
          </button>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
};

export default ProfileInfo;
