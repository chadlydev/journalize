import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

const DesktopOnly = styled('div', {
  display: 'none',

  '@desktop': {
    display: 'revert',
  },
});

export default DesktopOnly;
