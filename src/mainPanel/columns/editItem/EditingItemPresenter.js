import React, { useState } from 'react'

const EditingItemPresenter = ({item: { id , name, idname , value , placeHolder , type , label, labelFor , classname , description , required , readOnly, editValueInputType ,isChecked, checkText, title, hasMaxChar, maxChar, hasMax, max, hasMin, min, hasStep, step }, item, onChange}) => {

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
          <div className={`edit-item-row-g ${hasMaxChar === undefined && 'd-n'}`} id='hasMaxChar' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='hasMaxChar'
              checked={ hasMaxChar }
              onChange={onCheckHandler} /> <span id='hasMaxChar' className='cursor-d'>has max char</span>
          </div>
          <div className={`edit-item-row-g ${maxChar === undefined && 'd-n'} ${!hasMaxChar && 'd-n'}`}>
            <label className='edit-label'><code>max char:</code></label>
            <br />
            <input
              value={ maxChar }
              type='number'
              name='maxChar'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className={`edit-item-row-g ${hasMin === undefined && 'd-n'}`} id='hasMin' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='hasMin'
              checked={ hasMin }
              onChange={onCheckHandler} /> <span id='hasMin' className='cursor-d'>has minimum</span>
          </div>
          <div className={`edit-item-row-g ${min === undefined && 'd-n'} ${!hasMin && 'd-n'}`}>
            <label className='edit-label'><code>minimum:</code></label>
            <br />
            <input
              value={ min }
              type='number'
              name='min'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className={`edit-item-row-g ${hasMax === undefined && 'd-n'}`} id='hasMax' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='hasMax'
              checked={ hasMax }
              onChange={onCheckHandler} /> <span id='hasMax' className='cursor-d'>has maximum</span>
          </div>
          <div className={`edit-item-row-g ${max === undefined && 'd-n'} ${!hasMax && 'd-n'}`}>
            <label className='edit-label'><code>maximum:</code></label>
            <br />
            <input
              value={ max }
              type='number'
              name='max'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
          <div className={`edit-item-row-g ${hasStep === undefined && 'd-n'}`} id='hasStep' onClick={onCheckHandler}>
            <input
              type='checkbox'
              id='hasStep'
              checked={ hasStep }
              onChange={onCheckHandler} /> <span id='hasStep' className='cursor-d'>has step</span>
          </div>
          <div className={`edit-item-row-g ${step === undefined && 'd-n'} ${!hasStep && 'd-n'}`}>
            <label className='edit-label'><code>step:</code></label>
            <br />
            <input
              value={ step }
              type='number'
              name='step'
              className='edit-input'
              onChange={onChangeHandler} />
          </div>
        </div>
      </>
    )
}

export default EditingItemPresenter