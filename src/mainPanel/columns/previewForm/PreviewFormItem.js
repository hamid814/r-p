import React, { useEffect, useRef } from 'react'

const PreviewFormItem = ({item: { type, value, label, placeHolder, readOnly, required, checkText }, item}) => {
  const itemDiv = useRef(null)

  useEffect(() => {
    itemDiv.current.innerHTML = ''
    
    const itemLabel = document.createElement('label')
    itemLabel.innerText = label

    // add "*" if required
    if(required) {
      const labelStar = document.createElement('span')
      labelStar.className='required-star' // to make it red
      labelStar.innerText = '*'

      itemLabel.appendChild(labelStar)
    }

    // add label to div if label != ''
    if(label !== '') {
      itemDiv.current.appendChild(itemLabel)
    }

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

    // add text after checkboxes
    if(type === 'checkbox') {
      const textAfterCheckBox = document.createElement('span')

      textAfterCheckBox.innerText = checkText

      itemDiv.current.appendChild(textAfterCheckBox);
    }

    // eslint-disable-next-line
  }, [type, value, label, placeHolder, readOnly, required, checkText]);

  return (
    <div className='preview-form-item' ref={itemDiv}>
      {
        // every thing is created throgh useEffect hook 
      }
    </div>
    )
}

export default PreviewFormItem