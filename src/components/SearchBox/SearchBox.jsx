import { useId } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  const handleChange = (e) => {
    onFilter(e.target.value);  
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={handleChange} 
        className={styles.searchInput}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}  
        placeholder="Search by name..."
        aria-label="Search contacts by name"  
      />
    </div>
  );
};

export default SearchBox;
