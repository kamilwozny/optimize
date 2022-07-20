const Card = ({ children }) => {
  return (
    <div
      className={`bg-navyblue rounded-3xl p-4 m-auto w-[600px] h-[400px] absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4`}
    >
      {children}
    </div>
  );
};

export default Card;
