import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Form, Label, Input, Button } from './PhoneBook.styled';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleInputChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const formNameId = uuidv4();
    const formNumberId = uuidv4();

    return (
      <Form onSubmit={this.handleSubmitForm}>
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
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}
          />
        </Label>
        <Button type="submit" onClick={this.addNameFhoneBook}>
          Add contact
        </Button>
      </Form>
    );
  }
}

export default Phonebook;
