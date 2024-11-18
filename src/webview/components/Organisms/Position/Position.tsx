import React from 'react';
import Text from '../../Atoms/Text/Text';
import './Position.css';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import Input from '../../Atoms/Input/Input';

const Position = () => {
  return (
    <div className="positionBox">
      <div className="topRow">
        <Text text={'Position'} type={'heading'} />
        <HighlightAltIcon sx={{ fontSize: 24 }} />
      </div>
      <div className="actionRowContainer">
        <div className="actionRowBox">
          <Input />
          <Text text={'Position'} type={'heading'} />
          <Text text={'Position'} type={'heading'} />
        </div>
        <div className="actionRowBox">
          <Text text={'Position'} type={'heading'} />
          <Text text={'Position'} type={'heading'} />
          <Text text={'Position'} type={'heading'} />
        </div>
      </div>
    </div>
  );
};

export default Position;
