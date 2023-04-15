import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
} from 'components/dialog';
import { button } from 'components/button';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';

//=====================
// STYLED COMPONENTS

const Trigger = styled(Dialog.Trigger, {
  ...button,
});

//=====================
// REACT COMPONENT

export const AuthDialog = ({
  dialog,
  triggerText,
  toggleMenu,
  isOpen,
  ...props
}) => {
  const [dialogState, setDialogState] = useState(dialog);

  return (
    <Dialog.Root
      onOpenChange={() => {
        setDialogState(dialog);
      }}
    >
      <Trigger {...props}>{triggerText}</Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <DialogCloseButton />
          {dialogState === 'login' && <LogIn setDialogState={setDialogState} />}
          {dialogState === 'signup' && (
            <SignUp setDialogState={setDialogState} />
          )}
          {dialogState === 'forgotPassword' && (
            <ForgotPassword setDialogState={setDialogState} />
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
