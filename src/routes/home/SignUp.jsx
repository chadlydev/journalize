import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import { Link } from './Link';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { SignUpForm } from './SignUpForm';

export const SignUp = ({ setDialogState }) => {
  return (
    <>
      <Flex css={{ gap: '$4' }} direction="column" align="center">
        <Logo />
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
              Create an account
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
            Start your journaling journey
          </Text>
        </Flex>
      </Flex>
      <SignUpForm />
      <Text size="sm" weight="regular" color="gray">
        Already have an account?{' '}
        <Link type="button" onClick={() => setDialogState('login')}>
          Log in
        </Link>
      </Text>
    </>
  );
};
