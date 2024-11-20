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
        <HighlightAltIcon sx={{ fontSize: 14 }} />
      </div>
      <div className="actionRowContainer">
        <div className="actionRowBox">
          <Input
            variant="outlined"
            leftContent={{
              type: 'icon',
              content: <HighlightAltIcon sx={{ fontSize: 11 }} />,
            }}
            defaultValue="Custom value"
          />
          <Input defaultValue="Custom value" />
          <Input leftContent={{ type: 'text', content: 'Label' }} />
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
