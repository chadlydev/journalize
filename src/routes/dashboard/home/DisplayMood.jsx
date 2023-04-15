import Card from 'components/card';
import { Text } from 'components/typography';
import { Flex } from 'components/flex';
import { MoodButton } from '../MoodButton';

export const DisplayMood = ({ mood, moodCounter }) => {
  return (
    <Card
      direction="column"
      align="center"
      css={{
        gap: 12,
        py: '24px 16px',
        px: 24,
      }}
    >
      <Text size="md" color="gray" weight="medium">
        Current mood
      </Text>
      <Flex css={{ gap: 12 }}>
        <MoodButton
          smiley={1}
          counter={moodCounter.m1 || '0'}
          active={mood === 1}
          as="span"
          button={false}
        />
        <MoodButton
          smiley={2}
          counter={moodCounter.m2 || '0'}
          active={mood === 2}
          as="span"
          button={false}
        />
        <MoodButton
          smiley={3}
          counter={moodCounter.m3 || '0'}
          active={mood === 3}
          as="span"
          button={false}
        />
        <MoodButton
          smiley={4}
          counter={moodCounter.m4 || '0'}
          active={mood === 4}
          as="span"
          button={false}
        />
        <MoodButton
          smiley={5}
          counter={moodCounter.m5 || '0'}
          active={mood === 5}
          as="span"
          button={false}
        />
      </Flex>
    </Card>
  );
};
