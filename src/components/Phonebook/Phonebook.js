import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Form, Label, Input, Button } from './PhoneBook.styled';

export default function Phonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const nameObj = { name: name };
    const numberObj = { number: number };
    onSubmit(Object.assign({}, nameObj, numberObj));
    reset();
  };

  const handleInputChange = evt => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        break;
      case 'number':
        setNumber(evt.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  const formNameId = uuidv4();
  const formNumberId = uuidv4();

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label htmlFor={formNameId}>
        Name
        <Input
          id={formNameId}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleInputChange}
        />
      </Label>

      <Label htmlFor={formNumberId}>
        Number
        <Input
          id={formNumberId}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit" onClick={handleSubmitForm}>
        Add contact
      </Button>
    </Form>
  );
}
