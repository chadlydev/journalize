import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

const AvatarRoot = styled(AvatarPrimitive.Root, {
  d: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  br: '$full',
  bgColor: '$blackA3',
  flexShrink: 0,

  variants: {
    size: {
      sm: {
        size: '$12',
        fs: '$sm',
      },
      md: {
        size: '$24',
        fs: '$2xl',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  size: '$full',
  objectFit: 'cover',
  br: 'inherit',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  size: '$full',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgColor: '$primary3',
  color: '$primary11',
  lineHeight: 1,
  fontWeight: '$semibold',
});

//=====================
// REACT COMPONENT

const Avatar = ({ src, alt, fallback, ...props }) => (
  <AvatarRoot {...props}>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback delayMs={600}>{fallback}</AvatarFallback>
  </AvatarRoot>
);

export default Avatar;
