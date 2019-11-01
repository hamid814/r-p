import React, { Component } from 'react'

export class PreviewFormItem extends Component {
  render() {
    const { type, value, label, placeHolder, readOnly, required } = this.props.item;
    return (
      <div className='preview-form-item'>
        {
          label !== ''
           && <label>{ label } {required && '*'}</label>
        }
        {
          readOnly
            ? required
              ? <input type={type} value={value} placeholder={placeHolder} readOnly required/>
              : <input type={type} value={value} placeholder={placeHolder} readOnly/>
            : required
              ? <input type={type} defaultValue={value} placeholder={placeHolder} required/>
              : <input type={type} defaultValue={value} placeholder={placeHolder}/>
        }
      </div>
    )
  }
}

export default PreviewFormItem
