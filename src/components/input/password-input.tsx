import React, { InputHTMLAttributes, useState } from 'react';
import { Input } from '@/components/input';
import { default as EyeIcon } from '@/components/icons/eye-icon.svg';
import { default as EyeSlashIcon } from '@/components/icons/eye-slash-icon.svg';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  validation?: UseFormRegisterReturn<string>;
};

const PasswordInput: React.FC<Props> = ({ name, validation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState); // Toggle password visibility
  };

  return (
    <div className="flex items-center relative">
      <Input type={isPasswordVisible ? 'text' : 'password'} validation={validation} name={name} />
      <span className="absolute right-6 cursor-pointer" role="presentation" onClick={handleTogglePasswordVisibility}>
        {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
      </span>
    </div>
  );
};

export default PasswordInput;
