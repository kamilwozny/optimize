import Header from '../components/Header';
import waves from '../images/wave.svg';
import time from '../images/time.svg';
import rect from '../images/rect.svg';
import blob1 from '../images/Vectorblob1.svg';
import blob2 from '../images/Vectorblob2.svg';
import line from '../images/line1.svg';
import Load from '../components/Load';

const MainPage = () => {
  return (
    <>
      <Load />
      <Header />
      <img
        src={time}
        alt='hero'
        className='absolute top-36 md:scale-75 md:left-16 md: xl:scale-90 2xl:scale-100 2xl:left-36 tall:left-72'
      />
      <img
        src={blob1}
        alt='blob1'
        className='absolute left-36 bottom-60 -z-10 md:scale-75 md:left-16 md: xl:scale-90 2xl:scale-100 2xl:left-36 tall:left-72'
      />
      <img
        src={blob2}
        alt='blob2'
        className='absolute -top-24 -z-10 scale-50 right-36 xl:right-1/4 '
      />
      <div className='absolute top-1/3  w-hero md:right-5 lg:right-12 xl:right-36 2xl:right-60 '>
        <h2 className='font-extrabold text-6xl leading-snug '>
          Optimize your time much faster
          <span className='font-extrabold text-6xl text-cream'> with us</span>
        </h2>
        <img
          src={rect}
          alt='rect'
          className='absolute right-2 top-12 scale-90 -z-10'
        />
        <img src={line} alt='underline' className='absolute top-16 -z-10 ' />
      </div>
      <div className='overflow-y-hidden absolute left-0 -bottom-0 w-full'>
        <img src={waves} alt='waves' className='relative -bottom-16 w-full' />
      </div>
    </>
  );
};

export default MainPage;
