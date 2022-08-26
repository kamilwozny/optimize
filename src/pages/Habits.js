import { getAllHabits } from '../store/lib/api';
import useHttp from '../store/lib/hooks/use-http';
import { useEffect } from 'react';
import HabitList from '../components/Habits/HabitList';
import { motion } from 'framer-motion';
import HabitListSkeleton from '../components/Habits/HabitListSkeleton';
const Habits = () => {
  const {
    sendRequest,
    status,
    data: loadedHabits,
    error,
  } = useHttp(getAllHabits, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return <HabitListSkeleton />;
  }
  if (error) {
    return <p className='text-center'>{error}</p>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <HabitListSkeleton /> */}
      <HabitList habits={loadedHabits} />
    </motion.div>
  );
};
export default Habits;
