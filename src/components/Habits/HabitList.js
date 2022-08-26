import { useEffect, useState, useRef } from 'react';
import HabitItem from './HabitItem';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header';
import { addNewHabit } from '../../store/lib/api';
import useHttp from '../../store/lib/hooks/use-http';
import arrow from '../../images/arrowDown.svg';
import Input from '../Input';
import blob from '../../images/Vectorblob1.svg';
import blob1 from '../../images/Vectorblob2.svg';
import wave from '../../images/wave.svg';

const HabitList = (props) => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const { sendRequest, status } = useHttp(addNewHabit, true);

  const nameRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();

  const [categories, setCategories] = useState([]);
  const [validCategory, setValidCategory] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validDescription, setValidDescription] = useState(true);
  const newHabitHandler = (event) => {
    event.preventDefault();
    if (nameRef.current.value.length < 5) {
      setValidName(false);
      return;
    }
    if (descRef.current.value.length < 5) {
      setValidDescription(false);
      return;
    }
    if (categoryRef.current.value === 'default') {
      setValidCategory(false);
      return;
    }
    const habit = {
      name: nameRef.current.value,
      description: descRef.current.value,
      category: categoryRef.current.value,
      custom: true,
    };
    sendRequest(habit);
    if (status === 'pending') {
      console.log(habit);
      return <div className='text-center'>Sending request..</div>;
    }
  };
  useEffect(() => {
    let categoriesHabit = [];
    props.habits.map((habit) => {
      categoriesHabit.push(habit.category);
      return setCategories([...new Set(categoriesHabit)]);
    });
  }, [props.habits]);
  return (
    <div className='relative overflow-hidden'>
      <Header />
      {/* <BgHabits /> */}
      <div
        className={`bg-navyblue rounded-3xl p-4 mx-auto mt-48 w-[96vw] sm:w-[60vw] xl:w-1/3 flex z-40 mb-20 flex-col items-center`}
      >
        <h1 className='text-center text-cream text-5xl font-bold hover:cursor-default w-full'>
          All Habits
        </h1>
        <div className='grid grid-cols-1 w-full justify-items-center'>
          {categories.map((category) => {
            return (
              <div
                className='m-2 border-2 border-b-0 bg-sea w-[100%] overflow-hidden'
                key={category}
              >
                <div
                  onClick={() => setToggleCategory(category)}
                  className='flex relative justify-center items-center group cursor-pointer hover:scale-105 '
                >
                  <img
                    src={require(`../../images/${category}.svg`)}
                    alt='icon'
                    className='w-6 h-6 pr-1'
                  />
                  <h1 className='text-white text-center font-bold text-2xl border-b-2 border-b-red cursor-pointer'>
                    {category}
                  </h1>
                  {toggleCategory === category && (
                    <img
                      src={arrow}
                      alt='toggle'
                      className='absolute right-0 w-7 h-7 group-hover:right-3 rotate-180'
                    />
                  )}
                  {toggleCategory !== category && (
                    <img
                      src={arrow}
                      alt='toggle'
                      className='absolute right-0 w-7 h-7 group-hover:right-3 transition-all'
                    />
                  )}
                </div>
                <AnimatePresence>
                  {toggleCategory === category && (
                    <motion.ul
                      className='text-center'
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                      exit={{ y: -100 }}
                    >
                      {props.habits.map((habit) => {
                        if (
                          category === habit.category &&
                          habit.custom === ''
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
                        } else if (
                          category === habit.category &&
                          habit.custom === true
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
              </div>
            );
          })}
        </div>
      </div>
      <div className='bg-navyblue rounded-3xl p-4 m-auto mb-56 w-[96vw] sm:w-[600px] h-[400px]'>
        <h1 className='text-center text-cream text-5xl font-bold hover:cursor-default mb-4'>
          Add Custom Habit
        </h1>
        <form
          className='flex flex-col justify-center'
          onSubmit={newHabitHandler}
        >
          {!validName && (
            <p className=' text-red'>
              Habit name must be at least 5 characters length!
            </p>
          )}
          <Input
            reff={nameRef}
            placeholder='Enter habit name'
            label='Habit name'
            required
            id='habitName'
            onFocus={() => {
              setValidName(true);
            }}
          />
          {!validDescription && (
            <p className=' text-red'>
              Habit description must be at least 5 characters length!
            </p>
          )}
          <Input
            reff={descRef}
            placeholder='Enter description'
            label='Description'
            required
            id='habitDesc'
            onFocus={() => {
              setValidDescription(true);
            }}
          />
          <label className='text-white text-3xl font-bold pt-2'>
            Category:
          </label>
          {!validCategory && <p className=' text-red'>Choose category!</p>}
          <select
            onFocus={() => {
              setValidCategory(true);
            }}
            className='mt-2 outline-none'
            ref={categoryRef}
          >
            <option value='default'>Choose category...</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <button className='bg-red p-2 text-cream text-3xl mt-4 w-1/3 self-center rounded-3xl'>
            Add
          </button>
        </form>
      </div>
      <img
        className='absolute top-24 right-1/4 opacity-75 -z-30'
        src={blob}
        alt='blob'
      />
      <img
        className='absolute bottom-10 right-0 opacity-40 -z-30'
        src={blob1}
        alt='blob1'
      />
      <img
        className='absolute bottom-10 right-4 opacity-20 -z-30'
        src={blob1}
        alt='blob1'
      />
      <img
        className='absolute rotate-90 scale-50 top-0 left-0 opacity-30 -z-30'
        src={blob1}
        alt='blob1'
      />
      <img
        className='absolute top-1/2 rotate-45 left-0 scale-75 -z-30'
        src={blob1}
        alt='blob1'
      />
      <div className='w-full bg-no-repeat bg-center bg-cover'>
        <img
          className='absolute -bottom-20 left-0 w-full -z-20'
          src={wave}
          alt='waves'
        />
        <img
          className='absolute -bottom-12 left-0 opacity-70 w-full -z-20'
          src={wave}
          alt='waves'
        />
      </div>
    </div>
  );
};

export default HabitList;
