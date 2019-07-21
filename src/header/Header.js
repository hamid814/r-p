import React, { Component } from 'react';
import './header.css';

import Notes from '../Notes';

import Logo from '../logo/Logo';

export class Header extends Component {
  showNotes =() => {
    const notes = document.querySelector('#notes');
    notes.classList.toggle('roshan');
  }
  render() {
    return (
      <div id="header-wraper">
        <h1 id="header-text" className="header-icon">
          Form Maker 
          <code id="header-code" onClick={this.showNotes}>
            v 2.0
            <span id="notes">
              <Notes />
            </span>
          </code>
        </h1>
        <div id="header-logo" className="header-icon">
          <Logo id="hamid-header" />
        </div>
      </div>
    )
  }
}

export default Header
