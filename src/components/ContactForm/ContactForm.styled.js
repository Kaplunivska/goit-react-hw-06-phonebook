import styled from 'styled-components';

export const StyledForm = styled.form`
  min-width: 350px;
  width: fit-content;
  padding: ${({ theme }) => `${theme.space[3]}px`};

  border-radius: ${({ theme }) => theme.radii.medium};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledFormButton = styled.button`
  display: block;

  margin-left: auto;
  margin-top: ${({ theme }) => `${theme.space[4]}px`};
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[4]}px`};

  color: ${({ theme }) => theme.colors.form.text};

  border: 2px solid ${({ theme }) => theme.colors.form.text};
  border-radius: ${({ theme }) => theme.radii.small};

  transition: ${({ theme }) =>
    theme.transitions.create(['background-color', 'color', 'opacity'])};

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    cursor: not-allowed;

    opacity: 0.4;
  }
`;
