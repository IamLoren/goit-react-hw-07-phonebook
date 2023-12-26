import React from 'react';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/operations.js';

export const ContactItem = ({name, number, id}) => {

const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <span>{name}: </span>
      <span>{number}</span>
      <button className={s.deleteBTN} type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </li>
  );
};
