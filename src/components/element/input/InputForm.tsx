import { forwardRef } from 'react';
import InputComponent from './InputComponent';
import Label from './Label';

interface InputFormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string | number;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>((props, ref) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <InputComponent name={name} type={type} placeholder={String(placeholder)} ref={ref} />
    </div>
  );
});

export default InputForm;
