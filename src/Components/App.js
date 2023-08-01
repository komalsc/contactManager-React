import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const local_Storage_key = 'contacts';
  const initialContacts = JSON.parse(localStorage.getItem(local_Storage_key)) || [];
  const [contacts, setContacts] = useState(initialContacts);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem(local_Storage_key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

