import { forwardRef } from 'react';
import {
  StyledErrorMessage,
  StyledFormInput,
  StyledFormLabel,
} from './FormInput.styled';

const FormInput = forwardRef(({ children, touched, error, ...props }, ref) => (
  <StyledFormLabel>
    {children}
    <StyledFormInput {...props} isValid={!error} touched={touched} ref={ref} />

    {touched && error ? (
      <StyledErrorMessage>{error.message}</StyledErrorMessage>
    ) : null}
  </StyledFormLabel>
));

export default FormInput;
