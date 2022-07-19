import { Link } from 'react-router-dom';
const LinkButton = ({ to, color, children }) => {
  return (
    <Link
      to={`/${to}`}
      className={`w-40 bg-${color} text-center rounded-3xl pt-2 pb-2 pl-4 pr-4 m-4 text-xl font-extrabold text-white h-12`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
