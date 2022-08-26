import blob1 from '../../images/Vectorblob3.svg';
import blob2 from '../../images/Vectorblob4.svg';
import line from '../../images/line3.svg';

const BgLogin = () => {
  return (
    <>
      <div className='overflow-hidden w-full h-full absolute top-0 left-0 -z-20'>
        <img
          src={line}
          alt='line_background'
          className='absolute top-0 left-0 w-full h-full -z-30'
        />
        <img
          src={blob1}
          alt='blob1'
          className='absolute bottom-0 left-0 -z-20 '
        />
        <img src={blob2} alt='blob2' className='absolute top-0 right-0 -z-20' />
      </div>
    </>
  );
};

export default BgLogin;
