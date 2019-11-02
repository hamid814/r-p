import React from 'react'

const ContactItem = ({ contact: { name, faName } }) => {
  return (
    <div className='contact-item' id={`contact-me-${name}`}>
      <i className={`${faName}`}></i>
    </div>
  )
}

export default ContactItem
