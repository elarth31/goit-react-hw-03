import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import contactsData from './data/contacts.json';


const PHONEBOOK_KEY = 'phoneBook-contacts';


const loadContacts = () => {
  const storedContacts = localStorage.getItem(PHONEBOOK_KEY);
  return storedContacts ? JSON.parse(storedContacts) : contactsData;
};

function App() {
  const [contacts, setContacts] = useState(loadContacts); 
  const [filter, setFilter] = useState(''); 

 
  useEffect(() => {
    localStorage.setItem(PHONEBOOK_KEY, JSON.stringify(contacts));
  }, [contacts]);

  
  const addNewContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };


  const removeContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };


  const updateFilter = (value) => {
    const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    setFilter(formattedValue);
  };


const visibleContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().startsWith(filter.toLowerCase()) 
);


  return (
    <>
      <h1>Phone book</h1>
      <ContactForm onAdd={addNewContact} />
      <SearchBox value={filter} onFilter={updateFilter} />
      <ContactList contacts={visibleContacts} onDelete={removeContact} />
    </>
  );
}

export default App;

