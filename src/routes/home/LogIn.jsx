import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import { Link } from './Link';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { LogInForm } from './LogInForm';

export const LogIn = ({ setDialogState }) => {
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
              Log in to your account
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
            Welcome back! Please enter your details
          </Text>
        </Flex>
      </Flex>
      <LogInForm setDialogState={setDialogState} />
      <Text size="sm" weight="regular" color="gray">
        Don't have an account?{' '}
        <Link type="button" onClick={() => setDialogState('signup')}>
          Sign up
        </Link>
      </Text>
    </>
  );
};
