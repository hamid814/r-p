import React, { Component } from 'react';
import './logo.css';

export class Logo extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="logo-container">
        <div className="logo-unit" id="logo-unit-1"></div>
        <div className="logo-unit" id="logo-unit-2">
          <div className="logo-unit" id="logo-sub-unit-2-1"></div>
          <div className="logo-unit" id="logo-sub-unit-2-2"></div>
        </div>
        <div className="logo-unit" id="logo-unit-3"></div>
      </div>
      </React.Fragment>
    )
  }
}

export default Logo
