import { addUserHabit } from '../store/lib/api';
import useHttp from '../store/lib/hooks/use-http';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const HabitModal = ({ setOpenModal, habitData }) => {
  const { sendRequest, status } = useHttp(addUserHabit, true);
  const [showData, setShowData] = useState(true);
  const [saved, setSaved] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest(habitData);
    if (status === 'pending') {
      setShowData(false);
    }
    setShowData(true);
    setSaved(true);
  };

  return (
    <>
      <div
        className='w-full h-[100%] bg-black opacity-75 absolute left-0 top-0 overflow-hidden'
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div
        className={`bg-navyblue absolute left-1/2 top-[50vh] z-40 -translate-x-1/2 rounded-3xl p-4 m-auto w-[500px] h-[300px]`}
      >
        <div className='relative'>
          <h2 className='text-cream text-5xl font-medium text-center pb-2'>
            {!saved && 'Save this habit?'}
            {saved && 'Habit saved succesfully!'}
          </h2>
          <p
            onClick={() => {
              setOpenModal(false);
            }}
            className='text-cream text-2xl font-medium absolute top-0 right-0 cursor-pointer'
          >
            X
          </p>
        </div>
        {!showData && (
          <div className='border-[10px] m-auto border-t-[10px] border-t-sea border-solid rounded-[50%] w-20 h-20 animate-spin'></div>
        )}
        {saved && (
          <div className='mt-4'>
            <Link
              to='/dashboard'
              className='bg-sea rounded-3xl py-2 px-6 m-3 text-xl font-extrabold text-white z-30 hover:bg-red'
            >
              <span className='inline-block'>Go to dashboard</span>
            </Link>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className=' bg-sea rounded-3xl py-2 px-6 m-3  text-xl font-extrabold text-white z-30 hover:bg-red'
            >
              <span className='inline-block'>Add more habits</span>
            </button>
          </div>
        )}
        {showData && !saved && (
          <form
            onSubmit={submitHandler}
            className='flex justify-around h-[200px] items-end'
          >
            <div className='overflow-hidden'>
              <button
                type='submit'
                className='w-32 bg-sea rounded-3xl py-[5px] pl-6 pr-6 m-3 mb-4 text-xl font-extrabold text-white z-30 before:content-habitYes before:absolute before:left-[118px] before:transition-all before:top-44 before:opacity-0 before:hover:opacity-100  hover:before:top-[220px] text-center before:w-6 group before:h-6'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Save
                </span>
              </button>
            </div>
            <div className='overflow-hidden'>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                type='submit'
                className='w-32 bg-red rounded-3xl py-[5px] pl-6 pr-6 m-3 mb-4 text-xl font-extrabold text-white z-30 before:content-habitNo before:absolute before:left-[356px] before:transition-all before:top-44 before:opacity-0 before:hover:opacity-100 hover:before:top-[226px] text-center before:w-6 group before:h-6'
              >
                <span className='inline-block group-hover:translate-y-[300%] transition-all'>
                  Discard
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default HabitModal;
