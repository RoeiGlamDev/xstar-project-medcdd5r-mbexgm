import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, name, placeholder, required }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required) {
      setIsValid(e.target.value.trim() !== '');
    }
  };

  const handleBlur = () => {
    if (required) {
      setIsValid(value.trim() !== '');
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-white font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <motion.div
        className={shadow-lg p-2 rounded-md border ${isValid ? 'border-orange-500' : 'border-red-500'} transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {!isValid && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
    </div>
  );
};

export default Input;