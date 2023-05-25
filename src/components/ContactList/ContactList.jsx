import { deleteContact } from 'redux/contactSlice/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
  ContactContainer,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactContainer>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </ContactContainer>
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
