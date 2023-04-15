import { NavLink as NL } from 'react-router-dom';
import { keyframes, styled } from 'stitches.config';
import { Text } from 'components/typography';
import { QuoteOfTheDay } from './QuoteOfTheDay';
import { RandomQuote } from './RandomQuote';
import { SignOut } from './SignOut';
import { navLink } from './NavLink';
import { ReactComponent as Logo } from 'assets/logo-text.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home-line.svg';
import { ReactComponent as JournalIcon } from 'assets/icons/list.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings-01.svg';
import { AccountInfo } from './AccountInfo';

//=====================
// STYLED COMPONENTS

const NavLink = styled(NL, { ...navLink });

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-100%, 0%)' },
  '100%': { opacity: 1, transform: 'translateX(-100%, -50%)' },
});

const Wrapper = styled('aside', {
  w: 280,
  h: '100%',
  bgColor: '$gray1',
  borderRight: 'solid 1px $gray6',
  pos: 'fixed',
  d: 'flex',
  flexDirection: 'column',
  p: 32,
  gap: 32,
  zIndex: '$banner',
  animation: `${contentShow} 1000ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const Navigation = styled('nav', {
  d: 'flex',
  flexDirection: 'column',
  gap: 32,
  h: '$full',
});

const List = styled('ul', {
  all: 'unset',
  d: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const ListItem = styled('li', {
  all: 'unset',
});

//=====================
// REACT COMPONENTS

export const Sidebar = ({ closeMenu }) => {
  return (
    <Wrapper>
      <Logo />
      <Navigation>
        <List>
          <ListItem>
            <Text color="gray" size="xs" weight="semibold" css={{ mb: '-4px' }}>
              Navigation
            </Text>
          </ListItem>
          <ListItem onClick={closeMenu}>
            <NavLink to="/dashboard" end>
              <HomeIcon />
              <Text size="md" weight="semibold" css={{ color: 'inherit' }}>
                Dashboard
              </Text>
            </NavLink>
          </ListItem>
          <ListItem onClick={closeMenu}>
            <NavLink to="journal">
              <JournalIcon />
              <Text size="md" weight="semibold" css={{ color: 'inherit' }}>
                Journal
              </Text>
            </NavLink>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Text color="gray" size="xs" weight="semibold" css={{ mb: '-4px' }}>
              Inspiration
            </Text>
          </ListItem>
          <ListItem>
            <QuoteOfTheDay />
          </ListItem>
          <ListItem>
            <RandomQuote />
          </ListItem>
        </List>
        <List css={{ mt: 'auto' }}>
          <ListItem>
            <Text color="gray" size="xs" weight="semibold" css={{ mb: '-4px' }}>
              Account
            </Text>
          </ListItem>
          <ListItem onClick={closeMenu}>
            <NavLink to="settings">
              <SettingsIcon />
              <Text size="md" weight="semibold" css={{ color: 'inherit' }}>
                Settings
              </Text>
            </NavLink>
          </ListItem>
          <ListItem>
            <SignOut closeMenu={closeMenu} />
          </ListItem>
        </List>
        <AccountInfo />
      </Navigation>
    </Wrapper>
  );
};
