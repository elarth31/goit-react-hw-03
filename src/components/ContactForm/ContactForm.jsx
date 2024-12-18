import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';


const ContactSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Phone number must be in the format xxx-xx-xx'
    )
    .required('Phone number is required'),
});


const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
 
  const handleNameChange = (e, setFieldValue) => {
    let nameValue = e.target.value;
    if (nameValue && nameValue.charAt(0) !== nameValue.charAt(0).toUpperCase()) {
      nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
    }
    setFieldValue('name', nameValue);
  };


  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className={styles.formContact}>

          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              onChange={(e) => handleNameChange(e, setFieldValue)}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.formErrorMessage}
            />
          </div>


          <label className={styles.formLabel} htmlFor="number">
            Phone Number
          </label>
          <div className={styles.formInputWrapper}>
            <Field
              className={styles.formInput}
              type="tel"
              name="number"
              id="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.formErrorMessage}
            />
          </div>

          <button
            className={styles.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
