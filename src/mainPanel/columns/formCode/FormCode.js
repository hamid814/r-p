import React, { useRef } from 'react'

const FormCode = () => {
  const codeContainer = useRef(null);

  return (
    <>
      <h2 className='column-header'>
        Your Code
      </h2>
      <div id='final-code' className='column-body'>
        <textarea>
            
        </textarea>
        <div className='d-n'>

        </div>
      </div>
    </>
  )
}

export default FormCode
