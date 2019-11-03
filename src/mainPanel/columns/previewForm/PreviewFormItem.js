import React, { useEffect } from 'react'

const PreviewFormItem = ({item: { type, value, label, placeHolder, readOnly, required }}) => {
  useEffect(() => {
    
  }, []);

  return (
    <div className='preview-form-item'>
      {
        label !== ''
          && <label>{ label } {required && <span className='required-star'>*</span>}</label>
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

export default PreviewFormItem