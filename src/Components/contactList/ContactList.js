import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ findContact, removeContact }) => {
  return (
    <ul>
      {findContact.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <span className={s.span}>{contact.name}:</span>
            &nbsp;
            <span className={s.span}>{contact.number}</span>
            <button
              className={s.btn}
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  findContact: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
