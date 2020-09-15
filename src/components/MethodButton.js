import React from 'react';

const MethodButton = ({ title, changeActiveMethod, activeMethod }) => {

  const isActive = title === activeMethod;

  return (
    <label className={`btn btn-secondary ${isActive ? 'active' : ''}`}>
      <input 
        type="radio" 
        name="options" 
        id={title}
        onChange={changeActiveMethod}
        checked={isActive} 
      /> {title.toUpperCase()}
    </label>
  );
};

export default MethodButton;