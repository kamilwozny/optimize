const DashboardHeader = ({ habitsCounter }) => {
  return (
    <div className='bg-navyblue rounded-3xl p-4 m-auto mt-48 w-1/3 flex z-40 flex-col items-center'>
      <h1 className='text-center text-3xl font-extrabold text-white'>
        You did <span className='p-1 bg-sea rounded-full'>{habitsCounter}</span>{' '}
        tasks today.
      </h1>
    </div>
  );
};

export default DashboardHeader;
