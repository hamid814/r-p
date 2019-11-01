import React, { Component } from 'react';

import './formsetting.css'

export class FormSetting extends Component {
  titleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.set(name, value)
  }

  render() {
    const {title} = this.props.info
    return (
      <>
        {console.log(this.props)}
        <h2 className='column-header'>
          Settings
        </h2>
        <div className='column-body' id='form-setting'>
          <label>form title</label>
          <input type='text' name='title' value={title} onChange={this.titleChange}/>
        </div>
      </>
    )
  }
}

export default FormSetting
