import blob from '../../images/Vectorblob1.svg';
import blob1 from '../../images/Vectorblob2.svg';
import wave from '../../images/wave.svg';

const Habits = () => {
  return (
    <>
      <img
        className='absolute bottom-1/4 right-0 scale-150 opacity-75 -z-10'
        src={blob}
        alt='blob'
      />
      <img
        className='absolute top-0 left-0 scale-75 opacity-40 -z-10'
        src={blob1}
        alt='blob1'
      />
      <img
        className='absolute -bottom-96 left-20 scale-75 opacity-20 -z-20'
        src={blob1}
        alt='blob1'
      />
      <img
        className='absolute -bottom-96 left-28 scale-75 opacity-30 -z-20'
        src={blob1}
        alt='blob1'
      />
      <img
        className='absolute -bottom-96 left-36 scale-75 opacity-50 -z-20'
        src={blob1}
        alt='blob1'
      />
      <div className='w-full'>
        <img
          className='absolute -bottom-[580px] left-0 w-full -z-20'
          src={wave}
          alt='waves'
        />
        <img
          className='absolute -bottom-[550px] left-0 opacity-70 w-full -z-20'
          src={wave}
          alt='waves'
        />
      </div>
    </>
  );
};

export default Habits;
