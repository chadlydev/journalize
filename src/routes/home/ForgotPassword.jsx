import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from 'components/flex';
import FeaturedIcon from 'components/featuredIcon';
import { Heading, Text } from 'components/typography';
import { ReactComponent as KeyIcon } from 'assets/icons/key-01.svg';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export const ForgotPassword = ({ setDialogState }) => {
  return (
    <>
      <Flex css={{ gap: '$4' }} direction="column" align="center">
        <FeaturedIcon icon={<KeyIcon />} />
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
              Forgot password?
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
            No worries, we'll send you reset instructions
          </Text>
        </Flex>
      </Flex>
      <ForgotPasswordForm setDialogState={setDialogState} />
    </>
  );
};
