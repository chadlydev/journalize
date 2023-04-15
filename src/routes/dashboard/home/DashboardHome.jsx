import { Flex } from 'components/flex';
import { Heading, Text } from 'components/typography';
import { Stats } from './Stats';
import { DisplayMood } from './DisplayMood';
import Card from 'components/card';
import { useJournal } from 'context';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export const DashboardHome = () => {
  const { journal } = useJournal();
  const [currentMood, setCurrentMood] = useState({});
  const [moodCounter, setMoodCounter] = useState({});
  const [data, setData] = useState({
    labels: ['sad', 'meh', 'neutral', 'smile', 'happy'],
    datasets: [
      {
        label: 'mood',
        data: [],
        backgroundColor: [
          'hsl(189, 60.3%, 52.5%)',
          'hsl(190, 95%, 39%)',
          'hsl(191, 91.2%, 36.8%)',
          'hsl(192, 85%, 31%)',
          'hsl(192, 88%, 12.5%)',
        ],
      },
    ],
  });

  useEffect(() => {
    if (journal) {
      let m1 = 0;
      let m2 = 0;
      let m3 = 0;
      let m4 = 0;
      let m5 = 0;

      journal.forEach((entry) => {
        switch (entry.mood) {
          case 1:
            return (m1 = m1 + 1);
          case 2:
            return (m2 = m2 + 1);
          case 3:
            return (m3 = m3 + 1);
          case 4:
            return (m4 = m4 + 1);
          case 5:
            return (m5 = m5 + 1);
          default:
            return;
        }
      });

      setMoodCounter({
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
      });

      setData({
        ...data,
        datasets: [
          {
            label: 'mood',
            data: [m1, m2, m3, m4, m5],
          },
        ],
      });
    }
  }, [journal]);

  // Check if there is an entry today, and set the state to display the mood
  useEffect(() => {
    if (journal) {
      const today = format(new Date(), 'dd-MM-yyyy');
      const todayEntry = journal
        .sort((a, b) => b.date.seconds - a.date.seconds)
        .filter((entry) => {
          const entryDate = format(new Date(entry.date.toDate()), 'dd-MM-yyyy');
          return entryDate === today;
        });

      setCurrentMood(todayEntry[0]?.mood);
    }
  }, [journal]);

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
          Dashboard
        </Heading>
        <Text size="sm" color="gray">
          Capture your thoughts, one entry at a time.
        </Text>
      </Flex>
      <Flex
        css={{ gap: 24 }}
        direction={{ '@initial': 'column', '@desktop': 'row' }}
      >
        <Stats />
        <DisplayMood mood={currentMood} moodCounter={moodCounter} />
      </Flex>
      <Card
        direction="column"
        css={{
          flex: 1,
        }}
      >
        <Text as="h2" size="lg" weight="semibold">
          Mood tracker
        </Text>
        <BarChart chartData={data} />
      </Card>
    </Flex>
  );
};
