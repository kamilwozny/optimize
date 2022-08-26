import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
const Load = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [present, setPresent] = useState(true);
  useEffect(() => {
    setPresent(false);
  }, []);
  return (
    <AnimatePresence>
      {present && !isLoggedIn && (
        <div className='overflow-hidden w-full h-full absolute min-h-[760px]'>
          <motion.div
            key='bg'
            className={`w-[3000px] h-[3000px] rounded-[1500px] absolute top-1/2 left-1/2 bg-red z-50`}
            initial={{ scale: 1, translateX: '-50%', translateY: '-50%' }}
            animate={{ scale: 0, translateX: '-50%', translateY: '-50%' }}
            transition={{ duration: 0.6, delay: 2.4 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key='mid'
              className={`w-[120px] h-[120px] sm:w-[300px] sm:h-[300px] absolute top-1/2 left-1/2  bg-cream z-50`}
              initial={{ scale: 1, translateX: '-50%', translateY: '-50%' }}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '20%', '50%'],
                translateX: '-50%',
                translateY: '-50%',
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Load;
