import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
} from 'components/dialog';
import { Flex } from 'components/flex';
import FeaturedIcon from 'components/featuredIcon';
import { Heading } from 'components/typography';
import Quote from 'components/quote';
import { navLink } from './NavLink';
import { ReactComponent as QuoteIcon } from 'assets/icons/stars-03.svg';

//=====================
// STYLED COMPONENTS

const Trigger = styled(Dialog.Trigger, { ...navLink });

//=====================
// REACT COMPONENT

export const QuoteOfTheDay = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.goprogram.ai/inspiration');
      setResults(response.data);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Dialog.Root>
      <Trigger>
        <QuoteIcon />
        Quote of the day
      </Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <DialogCloseButton />
          <Flex
            css={{ gap: '$4', w: '$full' }}
            direction="column"
            align="center"
          >
            <FeaturedIcon icon={<QuoteIcon />} />
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
                  Quote of the day
                </Heading>
              </Dialog.Title>
            </Flex>
          </Flex>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Quote quote={results?.quote} author={results?.author} />
          )}
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
