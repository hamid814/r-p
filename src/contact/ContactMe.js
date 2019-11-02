import React, { useState } from 'react';
import ContactItem from './ContactItem';

import './contactMe.css';

const ContactMe = () => {
  const [connectionList, setConnectionList] = useState([
    {
      faName: 'instagram'
    },
    {
      faName: 'twitter'
    },
    {
      faName: 'envelope-o'
    }
  ])

  return (
    <div id='contact-wrapper'>
      {/* github
      tweeter
      portfolio
      email
      phone number
      ... */}
      me
      {
        connectionList.map(contact => (
          <ContactItem key={contact.faName} contact={contact} />
        ))
      }
    </div>
  )
}

export default ContactMe
