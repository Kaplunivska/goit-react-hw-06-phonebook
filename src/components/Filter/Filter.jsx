import { StyledForm } from 'components/ContactForm/ContactForm.styled';
import {
  StyledFormInput,
  StyledFormLabel,
} from 'components/FormInput/FormInput.styled';

import { FilterPropTypes } from './Filter.type';

export default function Filter({ filter, onChange }) {
  return (
    <StyledForm>
      <StyledFormLabel>
        Find contact by name
        <StyledFormInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => {
            onChange(evt.target.value);
          }}
          placeholder="Search..."
        />
      </StyledFormLabel>
    </StyledForm>
  );
}

Filter.propTypes = FilterPropTypes;