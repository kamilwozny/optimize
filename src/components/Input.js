const Input = ({
  reff,
  placeholder,
  label,
  type,
  value,
  onChange,
  id,
  minLength,
  onFocus,
}) => {
  if (!type) {
    type = 'text';
  }
  return (
    <div className='relative mt-4 min-w-[280px]'>
      <input
        value={value}
        onChange={onChange}
        ref={reff}
        type={type}
        className='w-full p-2 rounded-lg border-2 border-solid border-gray-300 appearance-none focus:outline-none  focus:border-red peer placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition-all'
        placeholder={placeholder}
        id={id}
        minLength={minLength}
        onFocus={onFocus}
      />
      <label
        htmlFor={id}
        className='cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
      >
        {label}
      </label>

      {/* <label className='cursor-text absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
        {label}
      </label> */}
    </div>
  );
};

export default Input;
