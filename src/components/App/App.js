import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';
import Phonebook from '../Phonebook';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const filterContacts = evt => {
    setFilter(evt.currentTarget.value);
  };

  const formSubmithanler = data => {
    data.id = uuidv4();
    const normalizedName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    console.log(contacts, `contacts`);
    if (normalizedName) {
      alert(`${data.name} is alredy in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const visibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook onSubmit={formSubmithanler} />
      </Section>

      <Section title="Contacts">
        <Filter onChange={filterContacts} filter={filter}></Filter>
        <ContactList
          contacts={visibleContact()}
          onDelete={deleteContact}
        ></ContactList>
      </Section>
    </Container>
  );
}
