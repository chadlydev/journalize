import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

export const Heading = styled('h1', {
  ls: '$sm',
  lh: '$xs',
  variants: {
    size: {
      '2xl': {
        fs: '$7xl',
      },
      xl: {
        fs: '$6xl',
      },
      lg: {
        fs: '$5xl',
      },
      md: {
        fs: '$4xl',
      },
      sm: {
        fs: '$3xl',
      },
      xs: {
        fs: '$2xl',
      },
    },
    weight: {
      regular: { fw: '$regular' },
      medium: { fw: '$medium' },
      semibold: { fw: '$semibold' },
      bold: { fw: '$bold' },
    },
    color: {
      primary: { color: '$primary11' },
      gray: { color: '$gray11' },
      error: { color: '$error11' },
      success: { color: '$success11' },
    },
  },
  defaultVariants: {
    size: 'xl',
    weight: 'semibold',
    color: 'gray12',
  },
});
