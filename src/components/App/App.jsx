// import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from 'components/ContactList';

import {
  setContacts,
  addContacts,
  deleteContacts,
} from 'redux/ContactSlicer/contactSlice';

import { setFilter } from 'redux/contactFilter/contactFilter';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  console.log(contacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameExists = contacts.some(contact => contact.name === name);
    if (nameExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { name, number, id: nanoid() };
    dispatch(addContacts(newContact));
    resetForm({ name: '', number: '' });
  };

  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = contactId => {
    dispatch(deleteContacts(contactId));
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
