import React, { Component } from 'react'

export class PreviewFormItem extends Component {
  render() {
    const { type, value, label, placeHolder, readOnly, required } = this.props.item;
    return (
      <div>
        {
          label !== ''
           && <label>{ label }</label>
        }
        <input type={type}/>
      </div>
    )
  }
}

export default PreviewFormItem
