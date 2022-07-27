import { Link } from 'react-router-dom';
const LinkButton = ({ to, children, btn }) => {
  return btn ? (
    <Link
      to={`/${to}`}
      className='w-40 bg-navyblue text-center rounded-3xl pt-2 pl-4 pr-4 m-4 mb-0 text-xl font-extrabold text-white h-12 z-30'
    >
      {children}
    </Link>
  ) : (
    <Link
      to={`/${to}`}
      className=' text-center m-4 mb-0 text-3xl font-extrabold text-navyblue z-30  border-sea'
    >
      {children}
    </Link>
  );
};

export default LinkButton;
