import React, { useState, useEffect, useRef } from 'react'

import './formCode.css';

const FormCode = ({ info: { action, method, title, description, submitText }, form }) => {
  const [copyBtnText, setCopyBtnText] = useState('')
  const codeContainer = useRef(null);
  const finalCode = useRef(null);

  useEffect(() => {
    const theForm = document.createElement('form');

    if(action !== '' && action) {
      theForm.action = action
    }

    if(method !== '' && method && method !== 'none') {
      theForm.method = method
    }

    const formTitle = document.createElement('h2');
    formTitle.innerText = title
    title !== '' && theForm.appendChild(formTitle)

    const formDesc = document.createElement('h4');
    formDesc.innerText = description
    description !== '' && theForm.appendChild(formDesc)

    /* form items be added here */
    form.forEach(item => {
      theForm.appendChild(getItemCode(item))
    })
    /* form items be added here */

    const formSubmit = document.createElement('input');
    formSubmit.type = 'submit'
    submitText === ''
      ? formSubmit.value = 'submit'
      : formSubmit.value = submitText
    theForm.appendChild(formSubmit);

    console.log(theForm)

    codeContainer.current.innerHTML = ''
    codeContainer.current.appendChild(theForm)

    // codeContainer.current.innerHTML.replace('><', `>
// <`)

    setCopyBtnText('copy');
    // eslint-disable-next-line
  }, [action, method, title, description, submitText, form]);

  const getItemCode = (item) => {
    const itemContainer = document.createElement('div');

    const itemLabel = document.createElement('label');
    itemLabel.innerText = item.label;

    // add for attr to label if it has
    if(item.labelFor && item.labelFor !== '') {
      itemLabel.setAttribute('for', item.labelFor);
    }

    if(item.label !== '' || item.labelFor !== '') {
      itemContainer.appendChild(itemLabel);
    }

    const itemCode = document.createElement('input');
    itemCode.type = item.type

    if(item.value !== '') {
      itemCode.setAttribute('value', item.value)
    }
    
    if(item.placeHolder && item.placeHolder !== '') {
      itemCode.setAttribute('placeholder', item.placeHolder)
    }

    if(item.name !== '') {
      itemCode.setAttribute('name', item.name)
    }
    
    if(item.idname !== '') {
      itemCode.setAttribute('id', item.idname)
    }
    
    if(item.classname !== '') {
      itemCode.setAttribute('class', item.classname)
    }
    
    if(item.required) {
      itemCode.setAttribute('required', '')
    }
    
    if(item.readOnly) {
      itemCode.setAttribute('readonly', '')
    }

    itemContainer.appendChild(itemCode);

    const itemDesc = document.createElement('div');
    itemDesc.innerText = item.description;

    if(item.description !== '') {
      itemContainer.appendChild(itemDesc);
    }

    console.log(itemContainer)

    return (itemContainer)
  }

  const copy = () => {
    finalCode.current.select()
    document.execCommand('copy')
    setCopyBtnText('copied');
  }

  return (
    <>
      <h2 className='column-header'>
        Your Code
      </h2>
      <div id='form-code' className='column-body'>
        <textarea id='final-code' ref={finalCode} value={codeContainer.current ? codeContainer.current.innerHTML : ''} readOnly>
            
        </textarea>
        <button id='copy-code' onClick={copy}>
          {copyBtnText}
        </button>
        <div ref={codeContainer} className='d-n'>
          {/* form is created in this div and then the textarea value = this.innerHTML */}
        </div>
      </div>
    </>
  )
}

export default FormCode
