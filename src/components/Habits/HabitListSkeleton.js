import Header from '../Header';
const HabitList = () => {
  return (
    <>
      <Header />
      <div
        className={`bg-navyblue rounded-3xl h-[360px] p-4 m-auto mt-48 w-1/3 flex z-40 mb-20 flex-col items-center`}
      >
        <h1 className='text-center text-cream text-5xl pb-20 font-bold hover:cursor-default w-full'>
          All Habits
        </h1>
        <div className='border-[10px] border-t-[10px] border-t-sea border-solid rounded-[50%] w-20 h-20 animate-spin'></div>
      </div>
      <div className='bg-navyblue rounded-3xl p-4 m-auto w-[600px] h-[400px]'>
        <div className='border-[10px] mx-auto mt-32 border-t-[10px] border-t-sea border-solid rounded-[50%] w-20 h-20 animate-spin'></div>
      </div>
    </>
  );
};

export default HabitList;
