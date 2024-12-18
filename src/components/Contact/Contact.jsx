import { FaUserAlt } from 'react-icons/fa'; 
import { FiPhoneCall } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = ({ id, number, name, onDelete }) => {
	return (
		<li className={styles.card}>
			<div>
				<div className={styles.details}>
					<FaUserAlt />
					<span>{name}</span>
				</div>
				<div className={styles.details}>
					<FiPhoneCall />
					 <a href={`tel:${number}`}>{number}</a>
				</div>
            </div>
            
			<button
        className={styles.deleteBtn}
        onClick={() => onDelete(id)}
        type="button"
        aria-label={`Delete contact ${name}`}
      >
        Delete
      </button>
		</li>
	);
};

export default Contact;
