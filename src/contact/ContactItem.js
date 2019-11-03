import React from 'react'

const ContactItem = ({ contact: { name, faName, link }, show, showEmail }) => {
  const onClick = () => {
    name === 'email' && showEmail()
    name !== 'email' && window.open(link)
  }
  
  return (
    <div className={`contact-item contact-top-row ${!show && 'd-n'}`} id={`contact-me-${name}`} onClick={onClick}>
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
