import propTypes from '@styled-system/prop-types';
import styled from 'styled-components';

import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  shadow,
  space,
} from 'styled-system';

export const Box = styled('div')(
    compose(space, color, layout, flexbox, background, border, shadow)
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.shadow,
};