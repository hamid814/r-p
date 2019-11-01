import React, { Component } from 'react';
import './formPanel.css';

class FormPanel extends Component {
  previewForm = () => {
    this.props.onClick('preview');
  }
  formSetting = () => {
    this.props.onClick('setting');
  }
  generateCode = () => {
    this.props.onClick('code');
  }
  backToEdit = () => {
    this.props.onClick('edit');
  }
  render() {
    return (
        <>
          <div id='form-panel'>
            <div
              className={`form-panel-item ${this.props.formStatus === 'edit' && 'active123456'}`}
              onClick={this.backToEdit}>
              E
              <span className='form-panel-item-desc'>Edit From</span>
            </div>
            <div
              className={`form-panel-item ${this.props.formStatus === 'setting' && 'active123456'}`}
              onClick={this.formSetting}>
              S
              <span className='form-panel-item-desc'>Form Setting</span>
            </div>
            <div
              className={`form-panel-item ${this.props.formStatus === 'preview' && 'active123456'}`}
              onClick={this.previewForm}>
              P
              <span className='form-panel-item-desc'>Preview Form</span>
            </div>
            <div
              className={`form-panel-item ${this.props.formStatus === 'code' && 'active123456'}`}
              onClick={this.generateCode}>
              C
              <span className='form-panel-item-desc'>Generate Code</span>
            </div>
          </div>
        </>
    )
  }
}

export default FormPanel
