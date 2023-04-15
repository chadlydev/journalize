import * as Dialog from '@radix-ui/react-dialog';
import { keyframes, styled } from 'stitches.config';
import { ReactComponent as Icon } from 'assets/icons/x-close.svg';
import { button } from '../button';

//=====================
// STYLED COMPONENTS

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const CloseButtonStyled = styled(Dialog.Close, {
  all: 'unset',
  cursor: 'pointer',
  br: '$lg',
  maxW: '$fit',
  transition: '$ease',
  p: 10,
  color: '$gray11',
  pos: 'absolute',
  right: 16,
  top: 16,

  '& svg': {
    size: '$5',
  },

  '&:hover': {
    bgColor: '$gray3',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '$xsGray',
  },
});

const CancelButtonStyled = styled(Dialog.Close, {
  ...button,
});

export const DialogOverlay = styled(Dialog.Overlay, {
  bgColor: '$blackA11',
  pos: 'fixed',
  inset: 0,
  animation: `${overlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: '$overlay',
});

export const DialogContent = styled(Dialog.Content, {
  bgColor: '$gray1',
  br: '$xl',
  pos: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '$lg',
  w: 'calc(100% - 16px)',
  maxW: '480px',
  maxH: '90vh',
  p: '32px 24px',
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
  animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: '$dialog',

  '&:focus': { outline: 'none' },

  '@tablet': {
    p: 48,
  },
});

//=====================
// REACT COMPONENTS

export const DialogCloseButton = ({ ...props }) => {
  return (
    <CloseButtonStyled {...props} aria-label="Close">
      <Icon />
    </CloseButtonStyled>
  );
};

export const DialogCancelButton = ({ label, ...props }) => {
  return (
    <CancelButtonStyled
      {...props}
      aria-label="Close"
      variant="secondaryGray"
      size="lg"
      fluid
    >
      {label ? label : 'Cancel'}
    </CancelButtonStyled>
  );
};
