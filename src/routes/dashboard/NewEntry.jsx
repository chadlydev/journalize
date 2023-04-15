import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import { button } from 'components/button';
import FeaturedIcon from 'components/featuredIcon';
import { styled } from 'stitches.config';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
} from 'components/dialog';
import { useState } from 'react';
import DesktopOnly from 'components/desktopOnly';
import MobileOnly from 'components/mobileOnly';
import { NewEntryForm } from './NewEntryForm';

//=====================
// STYLED COMPONENTS

const Trigger = styled(Dialog.Trigger, {
  ...button,
});

const MobileTrigger = styled(Dialog.Trigger, {
  ...button,
  pos: 'fixed',
  bottom: 8,
  right: 8,
  zIndex: '$sticky',
  boxShadow: '$xl',
  br: '$full',
  minW: 64,
  minH: 64,
  p: 0,

  '& svg': { size: 24 },
});

//=====================
// REACT COMPONENT

export const NewEntry = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <Dialog.Root open={open}>
      <DesktopOnly>
        <Trigger size="md" variant="primary" onClick={toggleOpen}>
          <PlusIcon />
          New entry
        </Trigger>
      </DesktopOnly>
      <MobileOnly>
        <MobileTrigger
          onClick={toggleOpen}
          css={{
            pos: 'fixed',
            bottom: 8,
            right: 8,
            zIndex: '$sticky',
            boxShadow: '$xl',
            br: '$full',
            minW: 64,
            minH: 64,
            p: 0,

            '& svg': { size: 24 },
          }}
        >
          <PlusIcon />
        </MobileTrigger>
      </MobileOnly>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent
          aria-describedby={undefined}
          onPointerDownOutside={toggleOpen}
          onInteractOutside={toggleOpen}
          onEscapeKeyDown={toggleOpen}
        >
          <DialogCloseButton onClick={toggleOpen} />
          <Flex css={{ gap: '$4' }} direction="column" align="center">
            <FeaturedIcon
              size={{ '@initial': 'sm', '@tablet': 'md' }}
              icon={<PlusIcon />}
            />
            <Flex
              direction="column"
              align="center"
              css={{
                gap: '$1',
                maxW: '$fit',
                textAlign: 'center',
              }}
            >
              <Dialog.Title asChild>
                <Heading
                  size={{ '@initial': 'xs', '@tablet': 'sm' }}
                  weight="semibold"
                  color="gray12"
                >
                  New entry
                </Heading>
              </Dialog.Title>
              <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
                Please enter details below to submit your entry
              </Text>
            </Flex>
          </Flex>
          <NewEntryForm toggleOpen={toggleOpen} />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
