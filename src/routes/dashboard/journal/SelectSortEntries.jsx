import { keyframes, styled } from 'stitches.config';
import { button } from 'components/button';
import { ReactComponent as SortIcon } from 'assets/icons/switch-vertical-01.svg';
import { ReactComponent as ChevronDownIcon } from 'assets/icons/chevron-down.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useJournal } from 'context';

//=====================
// STYLED COMPONENTS

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const Trigger = styled(DropdownMenu.Trigger, {
  ...button,
  w: 200,

  '& > svg': {
    '&[data-state="open"]': {
      size: 32,
    },
  },
});

const Content = styled(DropdownMenu.Content, {
  minW: 216,
  color: '$gray12',
  bgColor: '$gray1',
  border: '1px solid $gray7',
  br: '$lg',
  p: 8,
  // mt: 4,
  d: 'flex',
  flexDirection: 'column',
  gap: 8,
  boxShadow: '$xl',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const Item = styled(DropdownMenu.Item, {
  fs: '$sm',
  h: '2.5rem',
  px: '1.25rem',
  py: '0.625rem',
  fw: '$semibold',
  cursor: 'pointer',
  outline: 'none',
  br: '$md',
  transition: '$ease',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',

  '& > svg': { size: 16 },

  variants: {
    active: {
      true: {
        bgColor: '$gray4',
      },
      false: {
        '&:hover, &:focus': {
          bgColor: '$gray3',
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

//=====================
// REACT COMPONENT

export const SelectSortEntries = () => {
  const { sort, setSort } = useJournal();

  return (
    <DropdownMenu.Root>
      <Trigger
        size="md"
        variant="secondaryGray"
        fluid={{ '@initial': true, '@desktop': false }}
      >
        <SortIcon />
        {sort === 'descending' ? 'Sort: New to Old' : 'Sort: Old to New'}

        <ChevronDownIcon />
      </Trigger>
      <DropdownMenu.Portal>
        <Content side="bottom" sideOffset={6} loop={true}>
          <Item
            onSelect={() => setSort('descending')}
            active={sort === 'descending'}
          >
            <DropdownMenu.Arrow asChild>
              <ChevronDownIcon />
            </DropdownMenu.Arrow>
            New to Old
            {sort === 'descending' && <CheckIcon />}
          </Item>
          <Item
            onSelect={() => setSort('ascending')}
            active={sort === 'ascending'}
          >
            Old to New
            {sort === 'ascending' && <CheckIcon />}
          </Item>
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
