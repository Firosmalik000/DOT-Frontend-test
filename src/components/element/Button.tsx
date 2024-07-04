const Button = (props: any) => {
  const { children, classname = 'bg-black w-full', onClick = () => {}, type = 'button' } = props;

  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white `} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
