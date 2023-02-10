import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '../Box';
import ContactForm from '../ContactForm';
import { nanoid } from 'nanoid';
import { MainHeader, SubHeader } from '../Typography';
import ContactList from '../ContactList';
import Filter from '../Filter';
import {
  getFromLocalStorage,
  LS_CONTACTS,
  setToLocalStorage,
} from 'services/localStorage';

export default function App() {
 const [contacts, setContacts] = useState([]);
 const [filter, setFilter] = useState('');
 const isFirstRender = useRef(true);

  useEffect(() => {
  if (isFirstRender.current) {
   isFirstRender.current = false;
   const data = getFromLocalStorage(LS_CONTACTS);

   if (!data || data?.length === 0) return;
   setContacts(data);
   return;
  }
    setToLocalStorage(LS_CONTACTS, contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    // Show warrning if contact is already in contacts
    if (contact) {
      toast.warn(`${name} is already in contacts.`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: 'light',
      });

      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

    return (
      <Box p={3}>
        <MainHeader mb={3}>Phonebook</MainHeader>
        <ContactForm onSubmit={addContact} />

        <SubHeader mt={3} mb={2}>
          Contacts
        </SubHeader>
        <Filter filter={filter} onChange={setFilter} />
        <ContactList contacts={filteredContacts()} onDelete={deleteContact}/>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover={false}
          theme="light"
        />
      </Box>
    );
  }

