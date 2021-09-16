import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Item key={id}>
        <span>{name} : </span>
        <span>{number}</span>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ContactList;
