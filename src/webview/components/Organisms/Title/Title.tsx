import React from 'react';
import './Title.css';
import Text from '../../Atoms/Text/Text';

const Title = () => {
  return (
    <div className="titleBox">
      <Text text="ClassName:" type="title" />
      <div className="className">
        <Text text="Frame" type="box" />
      </div>
    </div>
  );
};

export default Title;
