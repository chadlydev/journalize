import { styled, css } from 'stitches.config';
import { Flex } from 'components/flex';
import { Text } from 'components/typography';
import { ReactComponent as Smiley1 } from 'assets/icons/face-sad.svg';
import { ReactComponent as Smiley2 } from 'assets/icons/face-frown.svg';
import { ReactComponent as Smiley3 } from 'assets/icons/face-neutral.svg';
import { ReactComponent as Smiley4 } from 'assets/icons/face-smile.svg';
import { ReactComponent as Smiley5 } from 'assets/icons/face-happy.svg';

//=====================
// STYLED COMPONENTS

export const moodButton = css({
  fw: '$semibold',

  br: '$lg',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$xs',
  transition: '$ease',
  color: '$gray12',
  bgColor: '$gray1',
  border: '1px solid $gray7',
  size: 48,
  outline: 'none',

  '& svg': {
    size: '$5',
  },

  '@tablet': {
    size: 64,
    '& svg': {
      size: '$6',
    },
  },

  variants: {
    active: {
      true: {
        color: '$primary11',
        bgColor: '$primary3',
        border: '1px solid $primary3',

        '&:hover': {
          bgColor: '$primary3',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },
      },
    },
    button: {
      true: {
        cursor: 'pointer',
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
          cursor: 'not-allowed',
          bgColor: '$gray1',
          borderColor: '$gray6',
          color: '$gray6',
        },
      },
      false: {
        '@desktop': {
          size: 48,
          '& svg': {
            size: '$5',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      active: true,
      button: true,
      css: {
        '&:hover': {
          bgColor: '$primary3',
        },

        '&:active': {
          bgColor: '$primary1',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },
      },
    },
  ],
  defaultVariants: {
    active: false,
    button: true,
  },
});

const Button = styled('button', moodButton);

//=====================
// REACT COMPONENT

export const MoodButton = ({ smiley, counter, ...props }) => {
  return (
    <Flex direction="column" align="center" css={{ gap: 4 }}>
      <Button {...props} type="button">
        {smiley === 1 && <Smiley1 />}
        {smiley === 2 && <Smiley2 />}
        {smiley === 3 && <Smiley3 />}
        {smiley === 4 && <Smiley4 />}
        {smiley === 5 && <Smiley5 />}
      </Button>
      {counter && (
        <Text size="sm" weight="medium" css={{ color: '$gray8' }}>
          {counter}
        </Text>
      )}
    </Flex>
  );
};
