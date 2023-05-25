import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from 'components/ContactList';

import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
