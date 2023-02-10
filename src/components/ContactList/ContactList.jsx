import { SubHeader } from 'components/Typography';
import { RiDeleteBack2Line } from 'react-icons/ri';
import {
  StyledContactList,
  StyledContactListButton,
  StyledContactListItem,
} from './ContactList.styled';
import { ContactListPropTypes } from './ContactList.type';

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <SubHeader mt={3}>The contact list is empty</SubHeader>;
  }

  return (
    <StyledContactList mt={3}>
      {contacts.map(({ id, name, number }) => (
        <StyledContactListItem key={id}>
          {name}: {number}
          <StyledContactListButton
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            <RiDeleteBack2Line fill="red" />
          </StyledContactListButton>
        </StyledContactListItem>
      ))}
    </StyledContactList>
  );
}

ContactList.propTypes = ContactListPropTypes;