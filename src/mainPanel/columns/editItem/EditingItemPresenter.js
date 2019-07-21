import React, { Component } from 'react';

export class EditingItemPresenter extends Component {
  state = {
    id: '',
    value: '',
    placeHolder: '',
    type: '',
    label: '',
    idname: '',
    classname: '',
    description: '',
    required: false,
    readOnly: false
  }
  componentWillReceiveProps(nextProps) {
    const { id , idname , value , placeHolder , type , label , classname , description , required , readOnly } = nextProps.item;
    this.setState({
      id,
      value,
      placeHolder,
      type,
      label,
      idname,
      classname,
      description,
      required,
      readOnly
    });
    // console.log();
  }
  onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const idNumber = this.state.id;
    this.props.onChange(idNumber, name, value);
  }
  onCheckHandler = (event) => {
    const idNumber = this.state.id;
    const name = event.target.name;
    const value = !this.state[name];
    this.props.onChange(idNumber, name, value);
  }
  render() {
    const { id , value , idname , placeHolder , label , classname , description , required , readOnly } = this.state;
    return (
      <React.Fragment>
        {id}
        <div className="edit-item-row-g">
            <label className="edit-label"><code>label:</code></label>
            <br />
            <input
              value={ label }
              name="label"
              className="edit-input"
              onChange={this.onChangeHandler} />
          </div>
          <div className="edit-item-row-g">
            <label className="edit-label"><code>value:</code></label>
            <br />
            <input
              value={ value }
              name="value"
              className="edit-input"
              onChange={this.onChangeHandler} />
          </div>
          <div className="edit-item-row-g">
            <label className="edit-label"><code>placeholder:</code></label>
            <br />
            <input
              value={ placeHolder }
              name="placeHolder"
              className="edit-input"
              onChange={this.onChangeHandler} />
          </div>
          <div className="edit-item-row-g">
            <label className="edit-label"><code>id:</code></label>
            <br />
            <input
              type="text"
              value={ idname }
              name="idname"
              className="edit-input"
              onChange={this.onChangeHandler} />
          </div>
          <div className="edit-item-row-g">
            <label className="edit-label"><code>class:</code></label>
            <br />
            <input
              value={ classname }
              name="classname"
              className="edit-input"
              onChange={this.onChangeHandler} />
          </div>
          <div className="edit-item-row-g">
            <label className="edit-label"><code>description:</code></label>
            <br />
            <textarea
              value={ description }
              name="description"
              className="edit-input edit-input-textarea"
              onChange={this.onChangeHandler} />
          </div>
          <div className="edit-item-row-g">
            <input
              type="checkbox"
              name="required"
              checked={ required }
              onChange={this.onCheckHandler} /> Required
          </div>
          <div className="edit-item-row-g">
            <input
              type="checkbox"
              name="readOnly"
              checked={ readOnly }
              onChange={this.onCheckHandler} /> Readonly
          </div>
      </React.Fragment>
    )
  }
}

export default EditingItemPresenter
