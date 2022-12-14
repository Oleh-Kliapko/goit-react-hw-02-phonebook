import React from 'react';
import { Item, DeleteButton } from './ContactsList.styled';
import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts, removeContact }) => {
  return contacts.map(({ id, name, number }) => (
    <Item key={nanoid(5)}>
      {name}: {number}
      <DeleteButton type="button" onClick={() => removeContact(id)}>
        Delete
      </DeleteButton>
    </Item>
  ));
};
