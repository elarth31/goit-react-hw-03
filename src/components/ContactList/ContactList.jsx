import PropTypes from 'prop-types'; 
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {


  if (contacts.length === 0) {
    return <p className={styles.noContacts}>No contacts available</p>;
  }

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, number, name }) => (
        <Contact
          key={id}
          id={id}
          number={number}
          name={name}
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;


