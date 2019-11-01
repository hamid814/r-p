import React, { useEffect, useRef } from 'react'

import './formCode.css';

const FormCode = ({ info: { action, method, title, description, submitText }, form }) => {
  const codeContainer = useRef(null);

  useEffect(() => {
    const form = document.createElement('form');

    if(action !== '' && action) {
      form.action = action
    }

    if(method !== '' && method && method !== 'none') {
      form.method = method
    }

    const formTitle = document.createElement('h2');
    formTitle.innerText = title
    title !== '' && form.appendChild(formTitle)

    const formDesc = document.createElement('h4');
    formDesc.innerText = description
    description !== '' && form.appendChild(formDesc)

    /* form items be added here */

    const formSubmit = document.createElement('input');
    formSubmit.type = 'submit'
    submitText === ''
      ? formSubmit.value = 'submit'
      : formSubmit.value = submitText
    form.appendChild(formSubmit);

    console.log(form)

    codeContainer.current.innerHTML = ''
    codeContainer.current.appendChild(form)
    // eslint-disable-next-line
  }, [action, method, title, description, submitText]);

  return (
    <>
      <h2 className='column-header'>
        Your Code
      </h2>
      <div id='form-code' className='column-body'>
        <textarea value={codeContainer.current ? codeContainer.current.innerHTML : ''} readOnly>
            
        </textarea>
        <div ref={codeContainer} className='d-n'>
          {/* form is created in this div and then the textarea value = this.innerHTML */}
        </div>
      </div>
    </>
  )
}

export default FormCode
