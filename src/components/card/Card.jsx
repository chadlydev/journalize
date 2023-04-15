import { styled } from 'stitches.config';
import { Flex } from '../flex';

//=====================
// STYLED COMPONENTS

const Card = styled(Flex, {
  bgColor: '$gray1',
  boxShadow: '$sm',
  br: '$xl',
  border: '1px solid $gray6',
  p: 16,

  '@desktop': {
    p: 24,
  },
});

export default Card;
