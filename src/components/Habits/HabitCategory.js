import HabitItem from './HabitItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const HabitCategory = (props) => {
  const token = localStorage.getItem('uid');
  const [toggleCategory, setToggleCategory] = useState(false);
  const toggleContentHandler = () => {
    setToggleCategory((prevState) => !prevState);
  };
  return (
    <>
      <div
        onClick={props.toggleContentHandler}
        className='flex justify-center items-center cursor-pointer hover:scale-105'
      >
        <img
          src={require(`../../images/${props.cat}.svg`)}
          alt='icon'
          className='w-6 h-6 pr-1'
        />
        <h1 className='text-white text-center font-bold text-2xl border-b-2 border-b-red cursor-pointer'>
          {props.cat}
        </h1>
      </div>
      <AnimatePresence>
        {toggleCategory === props.cat && (
          <motion.ul
            className='text-center'
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ y: 10 }}
          >
            {props.habits.map((habit) => {
              if (props.cat === habit.category && habit.custom === '') {
                return (
                  <HabitItem
                    key={habit.name}
                    id={habit.name}
                    name={habit.name}
                    desc={habit.description}
                    category={habit.category}
                  />
                );
              } else if (
                props.cat === habit.category &&
                habit.custom === `${token}`
              ) {
                return (
                  <HabitItem
                    key={habit.name}
                    id={habit.name}
                    name={habit.name}
                    desc={habit.description}
                    category={habit.category}
                  />
                );
              }
              return null;
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default HabitCategory;
