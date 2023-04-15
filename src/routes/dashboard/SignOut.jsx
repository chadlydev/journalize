import { useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import {
  DialogCloseButton,
  DialogCancelButton,
  DialogContent,
  DialogOverlay,
} from 'components/dialog';
import Button from 'components/button';
import { Flex } from 'components/flex';
import FeaturedIcon from 'components/featuredIcon';
import { Heading, Text } from 'components/typography';
import { navLink } from './NavLink';
import { ReactComponent as SignOutIcon } from 'assets/icons/log-out-01.svg';
import { useState } from 'react';
import { delay } from 'helpers';
import { useAuth } from 'context';

//=====================
// STYLED COMPONENTS

const Trigger = styled(Dialog.Trigger, { ...navLink });

//=====================
// REACT COMPONENT

export const SignOut = () => {
  const [loading, setLoading] = useState(false);
  const { logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Dialog.Root>
      <Trigger>
        <SignOutIcon />
        Sign out
      </Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <DialogCloseButton />
          <Flex
            css={{ gap: '$4', w: '$full' }}
            direction="column"
            align="center"
          >
            <FeaturedIcon icon={<SignOutIcon />} />
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
                  Sign out
                </Heading>
              </Dialog.Title>
              <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
                Are you sure you want to sign out?
              </Text>
            </Flex>
          </Flex>
          <Flex css={{ gap: 12, w: '100%' }}>
            <DialogCancelButton />
            <Button
              variant="primary"
              size="lg"
              fluid
              loading={loading}
              onClick={async () => {
                setLoading(true);
                try {
                  await delay(200);
                  await logOut();
                  navigate('/');
                } catch (e) {
                  console.error(e);
                } finally {
                  setLoading(false);
                }
              }}
            >
              Confirm
            </Button>
          </Flex>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
