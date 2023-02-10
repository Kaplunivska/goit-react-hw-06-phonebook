import { SubHeader } from 'components/Typography';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledContactList,
  StyledContactListButton,
  StyledContactListItem,
} from './ContactList.styled';
import { removeContact } from 'redux/contacts.slice';

const getFilteredContacts = (contacts, filterStr) =>
  filterStr.length === 0
    ? contacts
    : contacts.filter(({ name }) => name.toLowerCase().includes(filterStr));

export default function ContactList() {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filtredContacts = getFilteredContacts(contacts, filter);

  if (contacts.length === 0) {
    return <SubHeader mt={3}>The contact list is empty</SubHeader>;
  }

  return (
    <StyledContactList mt={3}>
      {filtredContacts.map(({ id, name, number }) => (
        <StyledContactListItem key={id}>
          {name}: {number}
          <StyledContactListButton
            type="button"
            onClick={() => {
              dispatch(removeContact({ id }));
            }}
            aria-label="delete contact button"
          >
            <RiDeleteBack2Line fill="red" />
          </StyledContactListButton>
        </StyledContactListItem>
      ))}
    </StyledContactList>
  );
}