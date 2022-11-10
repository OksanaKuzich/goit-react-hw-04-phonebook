import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './Utilit/GlobalStyle';
import { useState, useEffect } from 'react';

export const App = () => {
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

  const [contacts, setContacts] = useState(() => { return JSON.parse(window.localStorage.getItem('contacts'))});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  function addContacts(name, number) {
    const contactEl = {
      id: nanoid(),
      name,
      number,
    };

    const isDublicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isDublicate
      ? alert(`${name} is already in contacts`)
      : setContacts([contactEl, ...contacts]);
  }

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>Please, enter your first contact</p>
      ) : (
        <>
          <Filter valueFilter={filter} onChangeFilter={changeFilter} />
          <ContactList
            visible={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </>
      )}

      <GlobalStyle />
    </div>
  );
};
