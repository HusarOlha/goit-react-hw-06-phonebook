// import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from 'components/ContactList';

import { addContact, deleteContact } from 'redux/contactSlice/contactSlice';

import { setFilter } from 'redux/contactFilter/contactFilter';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameExists = contacts.some(contact => contact.name === name);
    if (nameExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    console.log(newContact);
    dispatch(addContact(newContact));
    resetForm({ name: '', number: '' });
  };

  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name &&
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <Title>Contacts</Title>
      <Filter onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={handleDelete}
      />
    </Container>
  );
};
