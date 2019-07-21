import React, { Component } from 'react';
import './formPanel.css';

export class FormPanel extends Component {
  previewForm = () => {
    this.props.onClick('previewform');
  }
  formSetting = () => {
    this.props.onClick('formsetting');
  }
  generateCode = () => {
    this.props.onClick('generatecode');
  }
  render() {
    return (
        <React.Fragment>
          <div id="form-panel">
            <div
              className="form-panel-item"
              name="previewForm"
              onClick={this.previewForm}>
              I
              <span className="form-panel-item-desc">Preview Form</span>
            </div>
            <div
              className="form-panel-item"
              name="formSetting"
              onClick={this.formSetting}>
              I
              <span className="form-panel-item-desc">Form Setting</span>
            </div>
            <div
              className="form-panel-item"
              name="generateCode"
              onClick={this.generateCode}>
              I
              <span className="form-panel-item-desc">Generate Code</span>
            </div>
          </div>
        </React.Fragment>
    )
  }
}

export default FormPanel
