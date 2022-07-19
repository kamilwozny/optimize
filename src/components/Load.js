import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Load = () => {
  const [present, setPresent] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPresent(false);
    }, 400);
  }, []);
  return (
    <AnimatePresence>
      {present && (
        <div className='overflow-hidden w-full h-full absolute'>
          <motion.div
            key='bg'
            className={`w-[3000px] h-[3000px] rounded-[1500px] absolute top-1/2 left-1/2 bg-red z-20`}
            initial={{ scale: 1, translateX: '-50%', translateY: '-50%' }}
            animate={{ scale: 0, translateX: '-50%', translateY: '-50%' }}
            transition={{ duration: 0.6, delay: 2.4 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key='mid'
              className={`w-[300px] h-[300px] absolute top-1/2 left-1/2  bg-cream z-30`}
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
