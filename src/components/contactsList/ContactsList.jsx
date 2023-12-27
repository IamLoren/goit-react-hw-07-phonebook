import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/operations.js';
import { selectError, selectContacts, selectFilter } from '../../redux/selectors.js'

export const ContactsList = ({children }) => {
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

    return ( 
    <>
   {children}
   {
    (filteredContacts?.length === 0 && !error)
    ? (<p className={s.noMatchesVessage}>No contacts match your search</p>)
    : ( <ul className={s.listOfContacts}>
      {filteredContacts?.map(({name, phone, id}) => (
        <ContactItem key={id} name={name} number={phone} id={id}/>
      ))}
    </ul>)
   }
    </>  
  );
};
