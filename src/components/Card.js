const Card = ({ width, height, children }) => {
  return (
    <div
      className={`bg-navyblue rounded-3xl p-4 m-auto w-[720px] h-[360px] absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4`}
    >
      {children}
    </div>
  );
};

export default Card;
