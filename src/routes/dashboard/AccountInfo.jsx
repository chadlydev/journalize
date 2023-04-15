import { useAuth } from 'context';
import { Flex } from 'components/flex';
import Avatar from 'components/avatar';
import { getInitials } from 'helpers';
import { Text } from 'components/typography';

export const AccountInfo = () => {
  const { user } = useAuth();

  return (
    <Flex css={{ borderTop: '1px solid $gray6', mx: '-12px' }}>
      <Flex align="center" css={{ gap: 12, pt: 12, pl: 12 }}>
        <Avatar
          src={user.photoURL || ''}
          alt={user.displayName}
          fallback={user.displayName ? getInitials(user.displayName) : ''}
        />
        <Flex direction="column">
          <Text size="sm" weight="semibold">
            {user.displayName}
          </Text>
          <Text size="xs" color="gray">
            {user.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
