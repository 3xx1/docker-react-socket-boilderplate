import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Visual = (props) => {
  let el = [];
  for (let i=0; i<props.count; i++) el.push(<div className="indicator" />); 
  return (
    <div className="visual-component" style={{left: `${props.xPosition - 50}vw`}}>{el}</div>
  );
};

Visual.propTypes = {
  count: PropTypes.number,
  xPosition: PropTypes.number
}

export default Visual;
