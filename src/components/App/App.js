import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';
import Phonebook from '../Phonebook';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

export default function App() {
  // state = {
  //   filter: '',
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  // };
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const componentDidMount = () => {
    const storage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storage);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
  const componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  const filterContacts = evt => {
    // this.setState({
    //   filter: evt.currentTarget.value,
    // });
    setFilter(evt.currentTarget.value);
  };

  const formSubmithanler = data => {
    data.id = uuidv4();
    console.log(data);
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
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const visibleContact = () => {
    console.log(`aaaa`);
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
