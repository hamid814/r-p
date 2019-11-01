import React, { useEffect, useRef } from 'react'

const FormCode = ({ info: { action, method, title, description }, form }) => {
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

    console.log(form)

    codeContainer.current.innerHTML = ''
    codeContainer.current.appendChild(form)
    // eslint-disable-next-line
  }, [action, method, title, description]);

  return (
    <>
      <h2 className='column-header'>
        Your Code
      </h2>
      <div id='final-code' className='column-body'>
        <textarea value={codeContainer.current ? codeContainer.current.innerHTML : ''} readOnly>
            
        </textarea>
        <div ref={codeContainer} className='d-n'>

        </div>
      </div>
    </>
  )
}

export default FormCode
