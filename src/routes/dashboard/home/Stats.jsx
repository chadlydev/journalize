import { Flex } from 'components/flex';
import { format, formatDistanceToNowStrict, isToday } from 'date-fns';
import { useAuth, useJournal } from 'context';
import { useEffect, useState } from 'react';
import { getCurrentStreak, getStreakRecord } from 'helpers';
import { StatsCard } from './StatsCard';

export const Stats = () => {
  const { user } = useAuth();
  const { journal } = useJournal();

  const [currentStreak, setCurrentStreak] = useState(0);
  const [streakRecord, setStreakRecord] = useState(0);
  const [daysJournaling, setDaysJournaling] = useState(0);

  // Set current streak & streak record
  useEffect(() => {
    if (journal) {
      const dates = journal
        ?.sort((a, b) => a.date.seconds - b.date.seconds)
        .map((entry) => format(entry.date.toDate(), 'YYY-MM-dd'));

      setCurrentStreak(getCurrentStreak(dates));
      setStreakRecord(getStreakRecord(dates));

      if (!isToday(user.createdAt?.toDate())) {
        setDaysJournaling(
          formatDistanceToNowStrict(new Date(user.createdAt.toDate()), {
            unit: 'day',
          }).split(' ')[0]
        );
      }
    }
  }, [journal]);

  return (
    <Flex
      css={{
        gap: 16,
        flexWrap: 'wrap',
        flex: 1,

        '@desktop': {
          gap: 24,
        },
      }}
    >
      <StatsCard number={daysJournaling || 0} title="Days journaling" />
      <StatsCard number={journal?.length || 0} title="Total entries" />
      <StatsCard number={currentStreak || 0} title="Current streak" />
      <StatsCard number={streakRecord || 0} title="Streak record" />
    </Flex>
  );
};
