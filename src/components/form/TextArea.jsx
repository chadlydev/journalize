import { styled } from 'stitches.config';
import { Text } from 'components/typography';
import { Flex } from 'components/flex';
import { Label } from './Label';
import { useField } from 'formik';
import { ReactComponent as Check } from 'assets/icons/check.svg';

//=====================
// STYLED COMPONENTS

const TextAreaStyled = styled('textarea', {
  color: '$gray12',
  fs: '$md',
  fw: '$regular',
  border: '1px solid $gray6',
  px: 14,
  py: 8,
  br: '$lg',
  bgColor: '$gray1',
  transition: '$ease',
  boxShadow: '$xs',
  height: 112,
  resize: 'none',

  '&::placeholder': {
    color: '$gray8',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '$xsPrimary',
  },

  variants: {
    error: {
      true: {
        '&:focus': {
          boxShadow: '$xsError',
        },
        boxShadow: '$xsError',
      },
    },
  },
});

//=====================
// REACT COMPONENT

export const TextArea = ({ label, id, hint, success, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Flex
      direction="column"
      css={{
        gap: 6,
      }}
    >
      <Label htmlFor={id}>{label}</Label>
      <TextAreaStyled
        id={id}
        {...props}
        {...field}
        error={meta.touched && !!meta.error}
      />
      {meta.touched && !!meta.error ? (
        <Text size="sm" weight="regular" color="error">
          {meta.error}
        </Text>
      ) : (
        hint && (
          <Text size="sm" weight="regular" color="gray">
            {hint}
          </Text>
        )
      )}
      {success && (
        <Flex
          align="center"
          css={{
            color: '$success11',
            gap: 4,
            '& svg': { size: 16 },
          }}
        >
          <Check />

          <Text size="sm" weight="regular" color="success">
            {success}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
