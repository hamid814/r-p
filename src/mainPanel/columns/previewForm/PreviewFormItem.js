import React, { useEffect, useRef } from 'react'

const PreviewFormItem = ({item: { type, value, label, placeHolder, readOnly, required }}) => {
  const itemDiv = useRef(null)
  
  useEffect(() => {
    const theItem = document.createElement('input')
    theItem.type = type

    if(value !== '') {
      theItem.setAttribute('value', value)
    }

    if(placeHolder !== '') {
      theItem.setAttribute('placeholder', placeHolder)
    }

    if(required !== '') {
      theItem.setAttribute('required', '')
    }

    if(readOnly !== '') {
      theItem.setAttribute('readonly', '')
    }

    itemDiv.current.appendChild(theItem);

    // eslint-disable-next-line
  }, []);

  return (
    <div className='preview-form-item' ref={itemDiv}>
      {
        label !== ''
          && <label>{ label } {required && <span className='required-star'>*</span>}</label>
      }
    </div>
    )
}

export default PreviewFormItem