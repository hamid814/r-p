import React, { Component } from 'react';

import './formsetting.css'

export class FormSetting extends Component {
  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.set(name, value)
  }

  render() {
    const {title, submitText, description, action, method} = this.props.info
    return (
      <>
        {console.log(this.props)}
        <h2 className='column-header'>
          Settings
        </h2>
        <div className='column-body' id='form-setting'>
          <label>form title</label>
          <input type='text' name='title' value={title} onChange={this.changeHandler}/>
          <br/>
          <label>form sumbit text</label>
          <input type='text' name='submitText' value={submitText} onChange={this.changeHandler}/>
          <br/>
          <label>form description</label>
          <input type='text' name='description' value={description} onChange={this.changeHandler}/>
          <br/>
          <label>form method</label>
          <select name='method' value={method} onChange={this.changeHandler}>
            <option value='none'>none</option>
            <option value='GET'>GET</option>
            <option value='POST'>POST</option>
          </select>
          <br/>
          <label>form action</label>
          <input type='text' name='action' value={action} onChange={this.changeHandler}/>
        </div>
      </>
    )
  }
}

export default FormSetting
