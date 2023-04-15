import { css } from 'stitches.config';

//=====================
// STYLED COMPONENTS

export const navLink = css({
  all: 'unset',
  color: '$gray12',
  d: 'flex',
  alignItems: 'center',
  gap: 8,
  w: '$full',
  p: '8px 12px',
  mx: '-12px',
  cursor: 'pointer',
  transition: '$ease',
  br: '$md',
  fw: '$semibold',

  '& svg': { size: 20 },

  '&:focus-visible:not(.active)': {
    boxShadow: '$xsGray',
  },

  '&:hover:not(.active)': {
    bgColor: '$gray3',
  },

  '&.active': {
    color: '$primary11',
    bgColor: '$primary3',

    '&:focus-visible': { boxShadow: '$xsPrimary' },
  },
});
