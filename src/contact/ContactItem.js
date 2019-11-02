import React from 'react'

const ContactItem = ({ contact: { faName } }) => {
  return (
    <div className='contact-item'>
      <i className={`fa fa-${faName}`}></i>
    </div>
  )
}

export default ContactItem
