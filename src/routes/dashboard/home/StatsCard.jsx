import Card from 'components/card';
import { Heading, Text } from 'components/typography';

export const StatsCard = ({ title, number }) => {
  return (
    <Card
      direction="column"
      align="center"
      css={{
        gap: 12,
        py: 24,
        px: 0,
        flex: 1,
        minW: 150,
      }}
    >
      <Text
        size={{ '@initial': 'sm', '@desktop': 'md' }}
        color="gray"
        weight="medium"
      >
        {title}
      </Text>
      <Heading
        size={{ '@initial': 'md', '@desktop': 'lg' }}
        weight="semibold"
        as="span"
      >
        {number}
      </Heading>
    </Card>
  );
};
