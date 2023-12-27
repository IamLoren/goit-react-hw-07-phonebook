import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice.js';
import s from './SearchFilter.module.css';
import {selectFilter} from '../../redux/selectors.js';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);

  const handleChangeFilter = (event) => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={s.searchLabel}>
      Find contacts by name
      <input
        name="filter"
        value={filterState}
        onChange={handleChangeFilter}
        type="text"
        placeholder="Enter contact name"
      />
    </label>
  );
};
