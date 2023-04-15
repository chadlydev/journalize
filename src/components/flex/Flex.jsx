import { css, styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

export const flex = css({
  d: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
    spaced: {
      true: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

const StyledFlex = styled('div', {
  ...flex,
});

//=====================
// REACT COMPONENT

export const Flex = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};
