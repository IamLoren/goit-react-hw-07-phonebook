import { InputField } from './InputField/InputField';
import { ContactsList } from './contactsList/ContactsList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { useSelector } from 'react-redux';
import { Hearts } from 'react-loader-spinner';
import { selectError, selectLoading } from '../../redux/selectors.js'

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <InputField />
      <h2>Contacts</h2>
      <SearchFilter />
      {loading && (
          <Hearts
            height="80"
            width="80"
            color="purple"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
    <ContactsList>
        {error && <h2>Oops! Something went wrong! Try again!</h2>}
      </ContactsList>
    </div>
  );
};
