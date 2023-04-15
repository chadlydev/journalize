import { styled, css, keyframes } from 'stitches.config';

//=====================
// STYLED COMPONENTS
export const button = css({
  fw: '$semibold',
  cursor: 'pointer',
  br: '$lg',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  maxW: '$fit',
  boxShadow: '$xs',
  transition: '$ease',

  '& svg': {
    size: '$5',
  },

  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    outline: 'none',
  },

  variants: {
    size: {
      sm: {
        fs: '$sm',
        h: '2.25rem',
        px: '0.875rem',
        py: '0.5rem',
      },
      md: {
        fs: '$sm',
        h: '2.5rem',
        px: '1rem',
        py: '0.625rem',
      },
      lg: {
        fs: '$md',
        h: '2.75rem',
        px: '1.125rem',
        py: '0.625rem',
      },
      xl: {
        fs: '$md',
        h: '3rem',
        px: '1.25rem',
        py: '0.75rem',
      },
      '2xl': {
        fs: '$lg',
        h: '3.75rem',
        px: '1.75rem',
        py: '1rem',
        gap: '0.75rem',
      },
    },
    variant: {
      primary: {
        color: '$gray1',
        bgColor: '$primary9',
        border: '1px solid $primary9',

        '&:hover': {
          bgColor: '$primary10',
          borderColor: '$primary10',
        },

        '&:active': {
          bgColor: '$primary9',
          borderColor: '$primary9',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$primary5',
          borderColor: '$primary5',
        },
      },
      error: {
        color: '$gray1',
        bgColor: '$error9',
        border: '1px solid $error9',

        '&:hover': {
          bgColor: '$error10',
          borderColor: '$error10',
        },

        '&:active': {
          bgColor: '$error9',
          borderColor: '$error9',
        },

        '&:focus': {
          boxShadow: '$xsError',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$error5',
          borderColor: '$error5',
        },
      },
      secondaryGray: {
        color: '$gray12',
        bgColor: '$gray1',
        border: '1px solid $gray7',

        '&:hover': {
          bgColor: '$gray3',
        },

        '&:active': {
          bgColor: '$gray1',
        },

        '&:focus': {
          boxShadow: '$xsGray',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$gray1',
          borderColor: '$gray6',
          color: '$gray6',
        },
      },
      secondaryColor: {
        color: '$primary11',
        bgColor: '$primary3',
        border: '1px solid $primary3',

        '&:hover': {
          bgColor: '$primary4',
          borderColor: '$primary4',
        },

        '&:active': {
          bgColor: '$primary3',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$primary2',
          borderColor: '$primary2',
          color: '$primary7',
        },
      },
      secondaryError: {
        color: '$error11',
        bgColor: '$error3',
        border: '1px solid $error3',

        '&:hover': {
          bgColor: '$error4',
          borderColor: '$error4',
        },

        '&:active': {
          bgColor: '$error3',
        },

        '&:focus': {
          boxShadow: '$xsError',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$error2',
          borderColor: '$error2',
          color: '$error7',
        },
      },
      tertiaryGray: {
        color: '$gray12',
        bgColor: '$transparent',
        border: '1px solid $transparent',
        boxShadow: 'none',

        '&:hover': {
          bgColor: '$gray3',
        },

        '&:focus': {
          boxShadow: '$xsGray',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$gray1',
          color: '$gray6',
        },
      },
      tertiaryColor: {
        color: '$primary11',
        bgColor: '$transparent',
        border: '1px solid $transparent',
        boxShadow: 'none',

        '&:hover': {
          bgColor: '$primary3',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$primary1',
          color: '$primary6',
        },
      },
      tertiaryError: {
        color: '$error11',
        bgColor: '$transparent',
        border: '1px solid $transparent',
        boxShadow: 'none',

        '&:hover': {
          bgColor: '$error3',
        },

        '&:focus': {
          boxShadow: '$xsError',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$error1',
          color: '$error6',
        },
      },
    },
    fluid: {
      true: {
        maxW: 'revert',
        flex: 1,
      },
      false: {
        maxW: '$fit',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    variant: 'primary',
    fluid: 'false',
  },
});

const loading = keyframes({
  to: { transform: 'rotate(1turn)' },
});

const LoadingSpinner = styled('div', {
  d: 'flex',
  justifyContent: 'center',

  '&:after': {
    content: '',
    size: 24,
    border: '3px solid $gray1',
    borderTopColor: '$transparent',
    br: '$full',
    animation: `${loading} 0.8s linear infinite`,
  },
});

const ButtonStyled = styled('button', { ...button });

//=====================
// REACT COMPONENT

const Button = ({ iconLeading, iconTrailing, children, loading, ...props }) => {
  return loading ? (
    <ButtonStyled {...props}>
      <LoadingSpinner />
    </ButtonStyled>
  ) : (
    <ButtonStyled {...props}>
      {iconLeading}
      {children}
      {iconTrailing}
    </ButtonStyled>
  );
};

export default Button;
