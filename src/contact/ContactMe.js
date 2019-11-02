import React, { useState } from 'react';
import ContactItem from './ContactItem';

import './contactMe.css';

const ContactMe = () => {
  const [connectionList, setConnectionList] = useState([
    {
      name: 'twitter',
      faName: 'fab fa-twitter'
    },
    {
      name: 'email',
      faName: 'far fa-envelope'
    },
    {
      name: 'github',
      faName: 'fab fa-github'
    }
  ])

  return (
    <div id='contact-wrapper'>
      {/* github
      tweeter
      portfolio
      email*/}
      {
        connectionList.map(contact => (
          <ContactItem key={contact.faName} contact={contact} />
        ))
      }
      <div id='contact-me-portfolio'>
        portfolio.me
      </div>
    </div>
  )
}

export default ContactMe
