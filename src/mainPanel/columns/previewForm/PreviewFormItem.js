import React, { useEffect, useRef } from 'react'

const PreviewFormItem = ({item: { description, title, hasMaxChar, maxChar, hasMax, max, hasMin, min, hasStep, step, type, value, label, placeHolder, readOnly, required, isChecked, checkText }, item}) => {
  const itemDiv = useRef(null)

  useEffect(() => {
    itemDiv.current.innerHTML = ''
    
    // add label to div 
    const itemLabel = document.createElement('label')
    itemLabel.innerText = label

    // add "*" to label if required
    if(required) {
      const labelStar = document.createElement('span')
      labelStar.className='required-star' // to make it red
      labelStar.innerText = '*'

      itemLabel.appendChild(labelStar)
    }

    if(label !== '') {
      itemDiv.current.appendChild(itemLabel)
    }

    // create the item and add it to the div
    const theItem = document.createElement('input')
    theItem.type = type

    if(value && value !== '') {
      theItem.setAttribute('value', value)
    }

    if(placeHolder && placeHolder !== '') {
      theItem.setAttribute('placeholder', placeHolder)
    }

    if(title !== '') {
      theItem.setAttribute('title', title)
    }

    console.log('add hasMasChar and maxChar with proper syntax');

    if(hasMax) {
      theItem.setAttribute('max', max)
    }
    
    if(hasMin) {
      theItem.setAttribute('min', min)
    }
    
    if(hasStep) {
      theItem.setAttribute('step', step)
    }

    if(required) {
      theItem.setAttribute('required', '')
    }

    if(readOnly) {
      theItem.setAttribute('readonly', '')
    }

    if(isChecked) {
      theItem.setAttribute('checked', '')
    }

    itemDiv.current.appendChild(theItem);
    
    // add text after checkboxes and check it
    if(type === 'checkbox') {
      const textAfterCheckBox = document.createElement('span')

      textAfterCheckBox.innerText = checkText

      itemDiv.current.appendChild(textAfterCheckBox);
    }

    // add item description
    const itemDesc = document.createElement('div')
    itemDesc.innerText = description
    
    itemDiv.current.appendChild(itemDesc)

    // eslint-disable-next-line
  }, [description, title, hasMaxChar, maxChar, hasMax, max, hasMin, min, hasStep, step, type, value, label, placeHolder, readOnly, required, isChecked, checkText]);

  return (
    <div className='preview-form-item' ref={itemDiv}>
      {
        // every thing is created throgh useEffect hook 
      }
    </div>
    )
}

export default PreviewFormItem