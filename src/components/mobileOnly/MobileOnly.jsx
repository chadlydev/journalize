import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

const MobileOnly = styled('div', {
  '@desktop': {
    display: 'none',
  },
});

export default MobileOnly;
