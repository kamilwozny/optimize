import Header from '../components/Header';
import ProfileInfo from '../components/ProfileInfo';
import { motion } from 'framer-motion';
import blob from '../images/Vectorblob1.svg';
import blob1 from '../images/Vectorblob2.svg';
import wave from '../images/wave.svg';
const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-[100vh] relative overflow-hidden'
    >
      <Header />
      <ProfileInfo />
      <img
        className='absolute top-44 right-0 scale-75 -z-30'
        src={blob}
        alt='blob'
      />
      <img
        className='absolute top-10 rotate-45 left-0 scale-75 opacity-80 -z-30'
        src={blob1}
        alt='blob1'
      />
      <div className='w-full'>
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
    </motion.div>
  );
};
export default Profile;
