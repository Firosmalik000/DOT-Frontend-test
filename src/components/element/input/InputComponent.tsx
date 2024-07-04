import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, placeholder, name, ...rest } = props;

  return (
    <>
      <input {...rest} type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder-opacity-50" placeholder={placeholder} name={name} id={name} ref={ref} />
    </>
  );
});

export default InputComponent;
