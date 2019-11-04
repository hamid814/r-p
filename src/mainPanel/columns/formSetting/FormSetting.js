import React, { Component } from 'react';

import './formsetting.css'

export class FormSetting extends Component {
  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name !== 'hasReset') {
      this.props.set(name, value);
    } else {
      this.props.set(name, !this.props.info.hasReset)
    }
  }

  onLineClicked = () => {
    this.props.set('hasReset', !this.props.info.hasReset)
  }

  render() {
    const {title, submitText, description, action, method, hasReset, resetText} = this.props.info
    return (
      <>
        <h2 className='column-header'>
          Settings
        </h2>
        <div className='column-body' id='form-setting'>
          <div id='setting-wrapper'>
            <div className='setting-item'>
              <label>Title</label>
              <input type='text' name='title' value={title} onChange={this.changeHandler}/>
            </div>
            <div className='setting-item'>
              <label>Method</label>
              <select name='method' value={method} onChange={this.changeHandler}>
                <option value='none'>none</option>
                <option value='GET'>GET</option>
                <option value='POST'>POST</option>
              </select>
            </div>
            <div className='setting-item'>
              <label>Action</label>
              <input type='text' name='action' value={action} placeholder='enter form action' onChange={this.changeHandler}/>
            </div>
            <div className='setting-item'>
              <label>Description</label>
              <input type='text' name='description' value={description} onChange={this.changeHandler}/>
            </div>
            <div className='setting-item' onClick={this.onLineClicked}>
              <input type='checkbox' name='hasReset' checked={hasReset} onChange={this.changeHandler}/>
              <label>Form has reset button</label>
            </div>
            {
              hasReset &&
                <div className='setting-item'>
                  <label>Reset botton text</label>
                  <input type='text' name='resetText' value={resetText} onChange={this.changeHandler}/>
                </div>
            }
            <div className='setting-item'>
              <label>Sumbit text</label>
              <input type='text' name='submitText' value={submitText} onChange={this.changeHandler}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FormSetting
