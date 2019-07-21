import React, { Component } from 'react';

export class FormItem extends Component {
  resetClickHandler = () => {
    const id = this.props.item.id;
    const item = this.props.item;
    const action = 'reset';
    this.props.onClick(id, action, item);
  }
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
  render() {
    const { name , type , label , placeHolder , value , description , required } = this.props.item;
    return (
      <div className={this.props.item.id === this.props.activeIdNumber ? 'item-row item-row-active' : 'item-row'}>
        <div className="item-row-header">
          <div className="item-row-header-name">
            <h4>::: {name}</h4>
          </div>
          <div className="item-row-header-btn-panel">
            <div className="item-row-header-btn" name="edit" onClick={this.resetClickHandler}>
              r
              <div className="item-row-header-btn-desc">
                Reset
              </div>
            </div>
            <div className="item-row-header-btn" name="edit" onClick={this.editClikHandler}>
              e
              <div className="item-row-header-btn-desc">
                Edit
              </div>
            </div>
            <div className="item-row-header-btn" name="edit" onClick={this.cloneClickHandler}>
              c
              <div className="item-row-header-btn-desc">
                Clone
              </div>
            </div>
            <div className="item-row-header-btn" name="edit" onClick={this.clickHandler}>
              &times;
              <div className="item-row-header-btn-desc">
                Delete
              </div>
            </div>
          </div>
        </div>
        <div className="item-row-body" onClick={this.editClikHandler}>
          <label>{label} <span className="required-star">{required ? '*' : ''}</span></label>
          <input
            type={type}
            placeholder={placeHolder}
            value={value}
            readOnly
            className="item-row-input" />
          <div className="item-description">
           {description}
          </div>
        </div>
      </div>
    )
  }
}

export default FormItem
