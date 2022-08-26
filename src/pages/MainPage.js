import Header from '../components/Header';
import waves from '../images/wave.svg';
import time from '../images/time.svg';
import blob1 from '../images/Vectorblob1.svg';
import blob2 from '../images/Vectorblob2.svg';
import line from '../images/line1.svg';
import Load from '../components/Load';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <motion.div
      className='min-h-[720px] overflow-y-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Load />
      <Header />
      <img
        src={time}
        alt='hero'
        className='absolute w-full max-w-[350px] left-1/2 -translate-x-1/2 top-24 sm:-left-4 sm:translate-x-0 sm:top-56 md:left-20 lg:scale-125 lg:left-[15%] xl:scale-[175%]  tall:left-72'
      />
      <img
        src={blob1}
        alt='blob1'
        className='absolute top-56 max-w-[350px] -z-10 scale-75 left-1/2 -translate-x-1/2 sm:-left-4 sm:translate-x-0 sm:top-96 md:left-20 lg:scale-100 lg:left-[15%] xl:scale-125 tall:left-72'
      />
      <img
        src={blob2}
        alt='blob2'
        className='absolute opacity-0 md:right-0 md:bottom-0 -z-10 scale-50 md:opacity-50 '
      />
      <img
        src={blob2}
        alt='blob2'
        className='absolute opacity-0 md:left-72 lg:left-[800px] md:-top-40 -z-10 scale-[20%] rotate-90 md:opacity-60 '
      />
      <div className='absolute top-96 w-[320px] left-1/2 -translate-x-1/2 sm:right-0 sm:translate-x-0 sm:top-64 lg:w-[520px] xl:right-36 2xl:right-60 '>
        <h2 className='font-extrabold text-5xl lg:text-7xl leading-[3.2rem] absolute top-10'>
          Optimize your time much faster
          <span className=' before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red relative inline-block'>
            <span className=' pl-2 relative text-white'> with us</span>
          </span>
        </h2>
        <img
          src={line}
          alt='underline'
          className='absolute -left-7 top-[76px] scale-75 lg:scale-100 lg:top-24 lg:left-2 -z-10 '
        />
      </div>
      <div className='absolute left-0 custom:top-[650px] bottom-0 w-full md:overflow-hidden'>
        <img
          src={waves}
          alt='waves'
          className='relative w-full lg:-bottom-16'
        />
      </div>
      <Link
        to='login'
        state={{ logInfo: false }}
        className='absolute custom:top-[620px] top-[650px] bottom-16 left-1/2 -translate-x-1/2 lg:  sm:right-0 sm:translate-x-0 sm:bottom-0 sm:top-[490px] lg:top-[560px] lg:ml-28 w-72 h-10 leading-5 bg-navyblue text-center rounded-3xl pt-2 m-2 mb-0 text-xl font-extrabold text-white z-30'
      >
        Get started
      </Link>
    </motion.div>
  );
};

export default MainPage;
