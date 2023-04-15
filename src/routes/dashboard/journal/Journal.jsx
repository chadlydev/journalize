import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import { styled } from 'stitches.config';
import { Entry } from './Entry';
import { useJournal } from 'context';
import { SelectSortEntries } from './SelectSortEntries';
import { format } from 'date-fns';

//=====================
// STYLED COMPONENTS

const Grid = styled('div', {
  d: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: 16,
  '@desktop': {
    gap: 24,
  },
});

//=====================
// REACT COMPONENT

export const Journal = () => {
  const { journal } = useJournal();

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
          Journal
        </Heading>
        <Text size="sm" color="gray">
          Capture your thoughts, one entry at a time.
        </Text>
      </Flex>
      <SelectSortEntries />
      <Grid>
        {journal &&
          journal.map((entry, idx) => (
            <Entry
              key={idx}
              date={format(entry.date.toDate(), 'MMMM dd, yyyy')}
              description={entry.description}
              mood={entry.mood}
              uid={entry.uid}
            />
          ))}
      </Grid>
    </Flex>
  );
};
