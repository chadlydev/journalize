import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

export const Text = styled('p', {
  variants: {
    size: {
      xs: {
        fs: '$xs',
      },
      sm: {
        fs: '$sm',
      },
      md: {
        fs: '$md',
      },
      lg: {
        fs: '$lg',
      },
      xl: {
        fs: '$xl',
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
    size: 'md',
    weight: 'regular',
    color: 'gray12',
  },
});
