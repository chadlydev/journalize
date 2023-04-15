import { styled } from 'stitches.config';

export const Link = styled('button', {
  all: 'unset',
  fs: '$sm',
  fw: '$semibold',
  color: '$primary11',
  cursor: 'pointer',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
});
