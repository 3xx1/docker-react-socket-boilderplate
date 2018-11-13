// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

// Class
export default class PageTwo extends React.PureComponent {
  render() {
    return (
      <div className="page-two-container">
        <p>Page Two Container</p>
      </div>
    );
  }
}

// Class Prop
PageTwo.PropTypes = {
  value1: PropTypes.number,
  value2: PropTypes.number,
  onValueUpdate: PropTypes.func
};
