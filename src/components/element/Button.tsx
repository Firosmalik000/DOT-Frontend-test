const Button = (props: any) => {
  // Memberikan nilai default untuk props yang tidak diisi
  const { children, classname = 'bg-black w-full', onClick = () => {}, type = 'button' } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white `}
      type={type}
      // Event handling
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
