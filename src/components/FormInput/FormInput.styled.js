import styled from 'styled-components';

// Set border color depending on form validation
const validateBorderColor = ({ theme, isValid, touched }) => {
  if (touched) {
    return isValid
      ? theme.colors.form.border.valid
      : theme.colors.form.border.invalid;
  }

  return theme.colors.form.border.normal;
};

export const StyledFormLabel = styled.label`
  position: relative;

  display: block;

  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.formLabel};
  color: ${({ theme }) => theme.colors.form.text};

  &:not(:first-child) {
    margin-top: ${({ theme }) => `${theme.space[4]}px`};
  }
`;

export const StyledFormInput = styled.input`
  display: block;

  width: 100%;
  margin-top: ${({ theme }) => `${theme.space[2]}px`};
  padding: ${({ theme }) => `${theme.space[1]}px`};

  font-size: ${({ theme }) => theme.fontSizes.formInput};
  outline: none;

  border-radius: ${({ theme }) => theme.radii.small};
  border-width: 2px;
  border-style: solid;
  border-color: ${validateBorderColor};

  //outline: 2px solid ${({ theme }) => theme.colors.form.outline.normal};

  transition: ${({ theme }) =>
    theme.transitions.create(['outline-color', 'border-color'])};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.form.outline.focus};
  }
`;

export const StyledErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;

  display: block;

  font-size: ${({ theme }) => theme.fontSizes.formError};
  line-height: 1;
  color: ${({ theme }) => theme.colors.form.error};

  transform: translateY(120%);
`;