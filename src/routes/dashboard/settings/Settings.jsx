import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import UpdatePassword from './UpdatePassword';
import PersonalInfo from './PersonalInfo';

export const Settings = () => {
  return (
    <Flex
      direction="column"
      css={{
        px: 16,
        py: 24,
        gap: 24,

        '@desktop': {
          p: 32,
        },
      }}
    >
      <Flex direction="column">
        <Heading
          size={{ '@initial': 'xs', '@desktop': 'sm' }}
          weight="semibold"
          as="h1"
        >
          Settings
        </Heading>
        <Text size="sm" color="gray">
          Update your account settings
        </Text>
      </Flex>
      <PersonalInfo />
      <UpdatePassword />
    </Flex>
  );
};
