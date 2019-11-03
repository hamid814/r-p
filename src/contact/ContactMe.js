import React, { useState } from 'react';
import ContactItem from './ContactItem';

import './contactMe.css';

const ContactMe = () => {
  const [connectionList, setConnectionList] = useState([
    {
      name: 'twitter',
      faName: 'fab fa-twitter',
      link: 'https://twitter.com/hamid331994'
    },
    {
      name: 'email',
      faName: 'far fa-envelope'
    },
    {
      name: 'github',
      faName: 'fab fa-github',
      link: 'https://github.com/hamid814'
    }
  ])
  const [showEmail, setShowEmail] = useState(false)

  const displayEmail = () => {
    setShowEmail(!showEmail);
  }

  const onBarClicked = () => {
    setShowEmail(false);
  }

  return (
    <div id='contact-wrapper'>
      {/* github
      tweeter
      portfolio
      email*/}
      {
        connectionList.map(contact => (
          <ContactItem key={contact.faName} contact={contact} show={!showEmail} showEmail={displayEmail} />
        ))
      }
      <div className='contact-item' id='contact-me-portfolio'>
        {
          showEmail
            ? 'hamid331994@gmail.com'
            : 'portfolio.me'
        }
        <div className='hover-text' onClick={onBarClicked}>
          {
            showEmail
              && 'click to go back'
          }
        </div>
      </div>
    </div>
  )
}

export default ContactMe
