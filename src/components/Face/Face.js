import React from 'react';
import './face.css';

const Face = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt5'>
        <img  id='inputimage' alt='' src={imageUrl} width='450px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
        </div>
      </div>
    </div>
  );
}

export default Face;