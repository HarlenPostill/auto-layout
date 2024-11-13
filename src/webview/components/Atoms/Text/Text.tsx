import React from 'react';
import './Text.css';

interface TextProps {
  text: string;
  type: string;
}

const Text = ({ text, type }: TextProps) => {
  return <div className={`text--${type}`}>{text}</div>;
};

export default Text;
