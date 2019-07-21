import React, { Component } from 'react';

import './footer.css';

import ReactLogo from './ReactLogo';
import HamidLogo from './HamidLogo';

export class Footer extends Component {
  render() {
    return (
      <div id="footer-wraper" className={this.props.isUp ? 'footer-expand' : 'footer-shrink'}>
        <HamidLogo />
        <ReactLogo />
      </div>
    )
  }
}

export default Footer
