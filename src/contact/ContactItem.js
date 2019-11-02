import React from 'react'

const ContactItem = ({ contact: { name, faName } }) => {
  return (
    <div className='contact-item contact-top-row' id={`contact-me-${name}`}>
      <i className={`${faName}`}></i>
      <div>
        my {name}
      </div>
      <div className='hover-text'>
        {
          name === 'email'
            ? 'email'
            : 'click to open in new tab'
        }
      </div>
    </div>
  )
}

export default ContactItem
