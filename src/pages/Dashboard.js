import Header from '../components/Header';
import line from '../images/line1.svg';
import { motion } from 'framer-motion';
import { getAllUserHabits } from '../store/lib/api';
import useHttp from '../store/lib/hooks/use-http';
import { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import yes from '../images/yes.svg';
import BgDashboard from '../components/Background/BgDashboard';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Dashboard = () => {
  const constraintsRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [dateToday, setDateToday] = useState(true);
  const [today, setToday] = useState(true);
  const onChange = (date) => {
    setDate(date);
  };
  const ctx = useContext(AuthContext);
  const { sendRequest, status, data } = useHttp(getAllUserHabits, true);
  const uid = localStorage.getItem('uid');
  let habitCounter = localStorage.getItem('counter');
  const [habits, setHabits] = useState(habitCounter);
  let clicked = [];
  const habitHandler = (habitName) => {
    ctx.count();
    setHabits((prevState) => {
      return parseInt(prevState) + 1;
    });
    data.map((habit) => {
      if (habit.userId === uid && habit.habit === habitName) {
        clicked.push(habit);
      }
      return clicked;
    });
  };
  useEffect(() => {
    if (date.getDate() === new Date().getDate()) {
      setDateToday('Today');
      setToday(true);
    } else {
      setToday(false);
      setDateToday(
        `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`
      );
    }
  }, [date]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === 'pending') {
    return <div>Sending request...</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-[100vh] relative overflow-hidden'
    >
      <motion.div
        className='w-[100vw] h-[100vh] opacity-25 bg-white -z-30 absolute'
        ref={constraintsRef}
      />
      <BgDashboard drag={constraintsRef} />
      <Header />
      {/* <motion.div
        className='bg-navyblue rounded-3xl w-56 h-56 absolute top-1/2 left-1/2'
        drag
        dragConstraints={constraintsRef}
      /> */}
      {/* <div className='mt-[15vh]'>
        <Calendar
          className='text-navyblue'
          onChange={onChange}
          showNavigation
          maxDate={new Date()}
          value={date}
        />
      </div> */}
      <div className='mt-[15vh] sm:mt-[20vh] scale-100 bg-navyblue rounded-3xl p-4 pb-0 sm:pb-4 w-[96vw] sm:w-[60vw] xl:w-1/2 flex z-40 flex-col items-center m-auto'>
        <h1 className='text-center text-xl sm:text-3xl font-extrabold text-white'>
          You did <span className='p-1 bg-sea rounded-full'>{habits}</span>{' '}
          habits.
        </h1>
        <div className='flex justify-between w-full py-2 text-white font-extrabold text-3xl'>
          <h1
            className='cursor-pointer pl-2'
            onClick={() => {
              setDate(new Date(date.setDate(date.getDate() - 1)));
            }}
          >{`<`}</h1>
          <h2 className='text-2xl'>{dateToday}</h2>
          {!today && (
            <h1
              className='cursor-pointer px-2'
              onClick={() => {
                setDate(new Date(date.setDate(date.getDate() + 1)));
              }}
            >{`>`}</h1>
          )}
          {today && <h1 className='pr-2 opacity-0'>{`>`}</h1>}
        </div>
      </div>
      <div
        className={`bg-navyblue rounded-3xl p-4 m-auto mt-10 sm:mt-20 flex mb-10 flex-col items-center z-40 scale-100 w-[96vw] sm:w-[60vw] xl:w-1/2`}
      >
        <img
          src={line}
          alt='header_underline'
          className='absolute scale-50 mt-4'
        />
        <h1 className='text-center text-3xl font-extrabold text-white'>
          Habits
        </h1>
        <h2 className='text-center text-lg font-extrabold text-white opacity-80'>
          Today
        </h2>
        <ul className='text-center text-lg font-extrabold text-white mt-4 w-full'>
          {data &&
            data.map((habit) => {
              return (
                <motion.div
                  key={habit.habit}
                  className='p-2 border-b-2 border-solid border-white text-2xl flex justify-between items-center'
                >
                  <li>{habit.habit}</li>
                  <p className=' text-sm sm:text-lg'>{habit.habitDesc}</p>
                  <div className='flex'>
                    <img
                      src={yes}
                      alt='toggle'
                      className='hover:cursor-pointer scale-75'
                      onClick={() => habitHandler(habit.habit)}
                    />
                  </div>
                </motion.div>
              );
            })}
          {!data && <Link to='/habits'>Add Habit</Link>}
        </ul>
      </div>
    </motion.div>
  );
};

export default Dashboard;
