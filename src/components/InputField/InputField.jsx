import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations.js';
import s from './InputField.module.css';
import {selectContacts} from '../../redux/selectors.js';

export const InputField = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const createContact = event => {
    event.preventDefault(); 
    const name = event.target.elements.name.value;
    const phone = event.target.elements.number.value;
    event.target.elements.name.value ='';
    event.target.elements.number.value = '';
    if (contacts?.items?.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContactThunk({ name, phone }));
   
  };

  return (
    <form className={s.formInput} onSubmit={createContact}>
      <label className={s.nameLabel}>
        Name <br />
        <input
          className={s.nameInput}
          name="name"
          type="text"
          placeholder="Enter contact name"
        />
      </label>

      <label className={s.numberLabel}>
        Number <br />
        <input
          className={s.numberInput}
          name="number"
          type="tel"
          placeholder="Enter contact number"
          required
        />
      </label>
      <button className={s.searchBTN} type="submit">
        Add contact
      </button>
    </form>
  );
};
