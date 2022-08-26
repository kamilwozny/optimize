// import { addUserHabit } from '../../store/lib/api';
// import useHttp from '../../store/lib/hooks/use-http';
import { useState, useEffect } from 'react';
import HabitModal from '../HabitModal';

const HabitItem = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [habit, setHabit] = useState();
  const uid = localStorage.getItem('uid');
  const addHabitHandler = () => {
    const habit = {
      userId: uid,
      habit: props.name,
      habitDesc: props.desc,
      streak: 0,
      done: 0,
    };
    setHabit(habit);
    setModalOpen(true);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  return (
    <>
      {modalOpen && (
        <HabitModal habitData={habit} setOpenModal={setModalOpen} />
      )}
      <li
        key={props.id}
        className='group flex items-center justify-between border-b-2 hover:bg-navyblue group-hover:text-white'
      >
        <div>
          <h1 className='text-navyblue text-xl text-start ml-2 hover:cursor-default group-hover:text-white'>
            {props.name}
          </h1>
          <p className='text-navyblue text-xs pl-2 hover:cursor-default group-hover:text-white'>
            {props.desc}
          </p>
        </div>
        <div>
          <button
            onClick={addHabitHandler}
            className='text-navyblue text-xl w-7 h-7 font-black rounded-[50%] text-center bg-red mr-2 hover:rotate-180 transition-all hover:scale-110'
          >
            +
          </button>
        </div>
      </li>
    </>
  );
};

export default HabitItem;
