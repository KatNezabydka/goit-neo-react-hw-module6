import React from 'react';
import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice.js';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <div>
          <FaUser className={css.icon} /> {name}
        </div>
        <div>
          <FaPhone className={css.icon} /> {number}
        </div>
      </div>
      <button className={css.btn} onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;