import React from 'react';

const BodyButtonComponent = ({ disabled, handleClick, title }) => {
  return (
    <div className='body-button'>
      <button disabled={disabled} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default BodyButtonComponent;
