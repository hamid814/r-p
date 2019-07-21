import React, { Component } from 'react';
import Logo from '../logo/Logo';

export class HamidLogo extends Component {
  render() {
    return (
      <div id="hamid-footer" className="footer-icon">
        <span id="hamid-logo-svg">
          <Logo />
        </span>
        <span id="hamid-text">&copy;hamid331994</span>
      </div>
    )
  }
}

export default HamidLogo
