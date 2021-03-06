import React, { Component } from 'react';

export class FormItem extends Component {
  editClikHandler = () => {
    const id = this.props.item.id;
    const item = this.props.item;
    const action = 'edit';
    this.props.onClick(id, action, item);
  }
  cloneClickHandler = () => {
    const id = this.props.item.id;
    const item = this.props.item;
    const action = 'clone';
    this.props.onClick(id, action, item);
  }
  deleteClickHandler = () => {
    const id = this.props.item.id;
    const item = this.props.item;
    const action = 'delete';
    this.props.onClick(id, action, item);
  }
  clickHandler = () => {
    const id = this.props.item.id;
    const item = this.props.item;
    const action = 'delete';
    this.props.onClick(id, action, item);
  }
  onInputClicked = (e) => {
    e.preventDefault()
  }
  render() {
    const { fieldName , type , label , placeHolder , value , description , required, title, isChecked, checkText } = this.props.item;
    return (
      <div className={this.props.item.id === this.props.activeIdNumber ? 'item-row item-row-active' : 'item-row'}>
        <div className='item-row-header'>
          <div className='item-row-header-name'>
            <h4>::: {fieldName}</h4>
          </div>
          <div className='item-row-header-btn-panel'>
            <div className='item-row-header-btn' name='edit' onClick={this.editClikHandler}>
              e
              <div className='item-row-header-btn-desc'>
                Edit
              </div>
            </div>
            <div className='item-row-header-btn' name='edit' onClick={this.cloneClickHandler}>
              c
              <div className='item-row-header-btn-desc'>
                Clone
              </div>
            </div>
            <div className='item-row-header-btn' name='edit' onClick={this.clickHandler}>
              &times;
              <div className='item-row-header-btn-desc'>
                Delete
              </div>
            </div>
          </div>
        </div>
        <div className='item-row-body' onClick={this.editClikHandler}>
          <label>{label} <span className='required-star'>{required ? '*' : ''}</span></label>
          {
            type !== 'checkbox' &&
            <input
              type={type}
              placeholder={placeHolder}
              value={value}
              title={title}
              readOnly
              onClick={this.onInputClicked}
              className='item-row-input my-0' />
          }
          {
            type === 'checkbox' &&
            <>
              <input
                type={type}
                placeholder={placeHolder}
                value={value}
                title={title}
                readOnly
                checked={isChecked}
                onClick={this.onInputClicked}
                className='item-row-input my-0' /> <span className='d-i-b'>{ checkText }</span>
            </>
          }
          <div className='item-description'>
           {description}
          </div>
        </div>
      </div>
    )
  }
}

export default FormItem
