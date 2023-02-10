import propTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

export const MainHeader = styled.h1`
  ${typography}
  ${space}

  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  color: ${({ theme }) => theme.colors.black};
`;

MainHeader.propTypes = {
  ...propTypes.space,
  ...propTypes.typography,
};

export const SubHeader = styled(MainHeader).attrs({
  as: 'h2',
})`
  font-size: ${({ theme }) => theme.fontSizes.h2};
`;

SubHeader.propTypes = {
  ...MainHeader.propTypes,
};