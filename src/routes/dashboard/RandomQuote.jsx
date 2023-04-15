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
import { navLink } from './NavLink';
import { ReactComponent as RandomQuoteIcon } from 'assets/icons/shuffle-01.svg';

const Trigger = styled(Dialog.Trigger, { ...navLink });

export const RandomQuote = () => {
  return (
    <Dialog.Root>
      <Trigger>
        <RandomQuoteIcon />
        Random Quote
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
            <FeaturedIcon icon={<RandomQuoteIcon />} />
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
                  Random Quote
                </Heading>
              </Dialog.Title>
            </Flex>
          </Flex>
          <img
            style={{ borderRadius: 8 }}
            src="https://zenquotes.io/api/image/[your_key]"
            alt="quote"
          />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
