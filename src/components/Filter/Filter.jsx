import { StyledForm } from 'components/ContactForm/ContactForm.styled';
import {
  StyledFormInput,
  StyledFormLabel,
} from 'components/FormInput/FormInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, updateFilter } from 'redux/contacts.slice';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  return (
    <StyledForm>
      <StyledFormLabel>
        Find contact by name
        <StyledFormInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => {
            dispatch(updateFilter({ value: evt.target.value }));
          }}
          placeholder="Search..."
        />
      </StyledFormLabel>
    </StyledForm>
  );
}
