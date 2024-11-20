import React, { useState } from 'react';
import './Input.css';

type InputVariant = 'filled' | 'outlined';
type LeftContent = {
  type: 'text' | 'icon';
  content: string | React.ReactNode;
};

interface InputProps {
  variant?: InputVariant;
  leftContent?: LeftContent;
  defaultValue?: string;
}

const Input = ({
  variant = 'filled',
  leftContent = { type: 'text', content: 'X' },
  defaultValue = '107',
}: InputProps) => {
  const [value, setValue] = useState(defaultValue);

  const containerClassName = `inputContainer ${variant === 'outlined' ? 'outlined' : ''}`;

  const renderLeftContent = () => {
    if (leftContent.type === 'text') {
      return <div className="leftIcon">{leftContent.content}</div>;
    }
    return leftContent.content;
  };

  return (
    <div className={containerClassName}>
      {renderLeftContent()}
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="TextInput"
      />
    </div>
  );
};

export default Input;
