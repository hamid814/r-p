import React, { useState } from 'react'

const EditingItemPresenter = ({item: { id , name, idname , value , placeHolder , type , label, labelFor , classname , description , required , readOnly, editValueInputType ,isChecked, checkText, title }, item, onChange}) => {

  const [activeSet, setActiveSet] = useState('common')

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    onChange(id, name, value);
  }

  const onCheckHandler = (event) => {
    const name = event.target.id;
    const value = !item[name];
    onChange(id, name, value);
  }

  const setPanel = (e) => {
    setActiveSet(e.target.id);
  }

  return (
      <>
        <div className='set-btn-panel'>
          <div>
            <div className='btn' id='common' onClick={setPanel}>
              common
            </div>
            <div className={`line ${activeSet !== 'common' && 's-n'}`}></div>
          </div>
          <div>
            <div className='btn' id='special' onClick={setPanel}>
              special
            </div>
            <div className={`line ${activeSet !== 'special' && 's-n'}`}></div>
          </div>
        </div>
        {/* common set of settings show here */}
        <div className={`edit-set ${activeSet !== 'common' && 'd-n'}`}>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>label:</code></label>
            <br />
            <input
              type='text'
              value={ label }
              name='label'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>label for:</code></label>
            <br />
            <input
              type='text'
              value={ labelFor }
              name='labelFor'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>name:</code></label>
            <br />
            <input
              type='text'
              value={ name }
              name='name'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>id:</code></label>
            <br />
            <input
              type='text'
              value={ idname }
              name='idname'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>class:</code></label>
            <br />
            <input
              value={ classname }
              name='classname'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>title:</code></label>
            <br />
            <input
              value={ title }
              name='title'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g'>
            <label className='edit-label'><code>description:</code></label>
            <br />
            <textarea
              value={ description }
              name='description'
              className='edit-input edit-input-textarea'
              onChange={onChangeHandler} />
          </div>
          <div className='edit-item-row-g' id='required' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='required'
              checked={ required }
              onChange={onCheckHandler} /> <span id='required' className='cursor-d'>Required</span>
          </div>
          <div className='edit-item-row-g' id='required' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='readOnly'
              checked={ readOnly }
              onChange={onCheckHandler} /> <span id='readOnly' className='cursor-d'>Readonly</span>
          </div>
        </div>
        {/* special set oof settings show here */}
        <div className={`edit-set ${activeSet !== 'special' && 'd-n'}`}>
          <div className={`edit-item-row-g ${value === undefined && 'd-n'}`}>
            <label className='edit-label'><code>value:</code></label>
            <br />
            <input
              type={ editValueInputType }
              value={ value }
              name='value'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className={`edit-item-row-g ${isChecked === undefined && 'd-n'}`} id='isChecked' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='isChecked'
              checked={ isChecked }
              onChange={onCheckHandler} /> <span id='isChecked' className='cursor-d'>Checked</span>
          </div>
          <div className={`edit-item-row-g ${checkText === undefined && 'd-n'}`}>
            <label className='edit-label'><code>checkbox text:</code></label>
            <br />
            <input
              type='text'
              value={ checkText }
              name='checkText'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className={`edit-item-row-g ${placeHolder === undefined && 'd-n'}`}>
            <label className='edit-label'><code>placeholder:</code></label>
            <br />
            <input
              value={ placeHolder }
              name='placeHolder'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className={`edit-item-row-g ${isChecked === undefined && 'd-n'}`} id='isChecked' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='isChecked'
              checked={ isChecked }
              onChange={onCheckHandler} /> <span id='isChecked' className='cursor-d'>Checked</span>
          </div>
        </div>
      </>
    )
}

export default EditingItemPresenter


// import React, { Component } from 'react';

// export class EditingItemPresenter extends Component {
//   state = {
//     id: '',
//     value: '',
//     placeHolder: '',
//     type: '',
//     label: '',
//     labelFor: '',
//     idname: '',
//     classname: '',
//     description: '',
//     required: false,
//     readOnly: false,
//     editValueInputType: '',
//     isChecked: false,
//     checkText: '',
//     title: '',
//   }
//   componentWillMount() {
//     console.log(this.props)
//   }
//   componentWillReceiveProps(nextProps) {
//     const { id , idname , value , placeHolder , type , label, labelFor , classname , description , required , readOnly, editValueInputType ,isChecked, checkText, title } = nextProps.item;
//     this.setState({
//       id,
//       value,
//       placeHolder,
//       type,
//       label,
//       labelFor,
//       idname,
//       classname,
//       description,
//       required,
//       readOnly,
//       editValueInputType,
//       isChecked,
//       checkText,
//       title,
//     });
//   }
//   onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const idNumber = this.state.id;
//     this.props.onChange(idNumber, name, value);
//   }
//   onCheckHandler = (event) => {
//     const idNumber = this.state.id;
//     const name = event.target.id;
//     const value = !this.state[name];
//     this.props.onChange(idNumber, name, value);
//   }
//   render() {
//     const { type , isChecked , editValueInputType , value , idname , placeHolder , label , labelFor , classname , description , required ,readOnly, checkText, title } = this.state;
//     return (
//       <>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>label:</code></label>
//           <br />
//           <input
//             type='text'
//             value={ label }
//             name='label'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>label for:</code></label>
//           <br />
//           <input
//             type='text'
//             value={ labelFor }
//             name='labelFor'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className={`edit-item-row-g ${type === 'checkbox' && 'd-n'}`}>
//           <label className='edit-label'><code>value:</code></label>
//           <br />
//           <input
//             type={ editValueInputType }
//             value={ value }
//             name='value'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className={`edit-item-row-g ${type !== 'checkbox' && 'd-n'}`} id='isChecked' onClick={this.onCheckHandler}>
//           <input
//             type='checkbox'
//             id='isChecked'
//             checked={ isChecked }
//             onChange={this.onCheckHandler} /> <span id='isChecked' className='cursor-d'>Checked</span>
//         </div>
//         <div className={`edit-item-row-g ${type !== 'checkbox' && 'd-n'}`}>
//           <label className='edit-label'><code>checkbox text:</code></label>
//           <br />
//           <input
//             type='text'
//             value={ checkText }
//             name='checkText'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>placeholder:</code></label>
//           <br />
//           <input
//             value={ placeHolder }
//             name='placeHolder'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>id:</code></label>
//           <br />
//           <input
//             type='text'
//             value={ idname }
//             name='idname'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>class:</code></label>
//           <br />
//           <input
//             value={ classname }
//             name='classname'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>title:</code></label>
//           <br />
//           <input
//             value={ title }
//             name='title'
//             className='edit-input'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g'>
//           <label className='edit-label'><code>description:</code></label>
//           <br />
//           <textarea
//             value={ description }
//             name='description'
//             className='edit-input edit-input-textarea'
//             onChange={this.onChangeHandler} />
//         </div>
//         <div className='edit-item-row-g' id='required' onClick={this.onCheckHandler}>
//           <input
//             type='checkbox'
//             id='required'
//             checked={ required }
//             onChange={this.onCheckHandler} /> <span id='required' className='cursor-d'>Required</span>
//         </div>
//         <div className='edit-item-row-g' id='required' onClick={this.onCheckHandler}>
//           <input
//             type='checkbox'
//             id='readOnly'
//             checked={ readOnly }
//             onChange={this.onCheckHandler} /> <span id='readOnly' className='cursor-d'>Readonly</span>
//         </div>
//       </>
//     )
//   }
// }

// export default EditingItemPresenter
