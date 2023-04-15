import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

const Wrapper = styled('div', {
  br: '$full',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',

  variants: {
    color: {
      primary: {
        color: '$primary11',
        bgColor: '$primary5',
        borderColor: '$primary3',
      },
      gray: {
        color: '$gray11',
        bgColor: '$gray5',
        borderColor: '$gray3',
      },
      error: {
        color: '$error11',
        bgColor: '$error5',
        borderColor: '$error3',
      },
    },
    size: {
      sm: {
        size: 40,
        borderWidth: 6,

        '& svg': { size: 16 },
      },
      md: {
        size: 64,
        borderWidth: 10,

        '& svg': { size: 24 },
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

//=====================
// REACT COMPONENT

const FeaturedIcon = ({ icon, ...props }) => {
  return <Wrapper {...props}>{icon}</Wrapper>;
};

export default FeaturedIcon;
