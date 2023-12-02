import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/contacts-operations.js';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors.js';
import { AiFillDelete } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import {
  ContactListItem,
  ContactIcon,
  ContactListWrapper,
  ContactListName,
  ContactListPhone,
  ContactDetails,
  DeleteButton,
} from './ContactListStyles.jsx';

function ContactList() {
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactsList = visibleContacts.map(({ id, name, phone }) => (
    <ContactListItem key={id}>
        <ContactIcon>
        <RiContactsLine />
        </ContactIcon>
        <ContactDetails>
        <ContactListName>
          {name}
        </ContactListName>
        <ContactListPhone>
          {phone}
        </ContactListPhone>
        </ContactDetails>
        <DeleteButton
          id={id}
          type="button"
          onClick={() => dispatch(removeContact(id))}
        >
          <AiFillDelete />
        </DeleteButton>
    </ContactListItem>
  ));

  return <ContactListWrapper>{contactsList}</ContactListWrapper>;
}

export default ContactList;
