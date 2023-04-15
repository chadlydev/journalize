import { useState } from 'react';
import { styled } from 'stitches.config';
import { Heading, Text } from 'components/typography';
import DesktopOnly from 'components/desktopOnly';
import MobileOnly from 'components/mobileOnly';
import { Flex, flex } from 'components/flex';
import { AuthDialog } from './AuthDialog';
import { ReactComponent as Logo } from 'assets/logo-text.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu-01.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/x-close.svg';
import { ReactComponent as Shapes } from 'assets/shapes.svg';

//=====================
// STYLED COMPONENTS

const Container = styled('div', {
  w: '$full',
  px: '16px',
  maxW: '$6xl',
});

const Header = styled('header', {
  w: '$full',
  borderBottom: '1px solid $gray6',
  d: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  h: '$18',
  flexShrink: 0,
  '@desktop': {
    h: '$20',
  },
});

const Wrapper = styled(Flex);
const Side = styled(Flex, { flex: 1 });
const Navigation = styled('nav', { ...flex });
const Hero = styled(Flex);
const HeroText = styled(Flex);

const MobileMenu = styled('nav', {
  pos: 'absolute',
  top: 73,
  left: 0,
  zIndex: '$dropdown',
  bgColor: '$gray1',
  w: '100vw',
  boxShadow: '$lg',
  d: 'flex',
  flexDirection: 'column',
  gap: 12,
  p: 16,
});

//=====================
// REACT COMPONENT

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper
      direction="column"
      align="center"
      css={{
        gap: '$16',
        overflow: 'hidden',
        maxH: '100vh',
        '@desktop': { gap: '$24' },
      }}
    >
      <Header>
        <Container>
          <Navigation align="center">
            <Logo />
            <Side />
            <MobileOnly>
              {isOpen ? (
                <CloseIcon onClick={toggleMenu} />
              ) : (
                <MenuIcon onClick={toggleMenu} />
              )}
              {isOpen && (
                <MobileMenu>
                  <AuthDialog
                    dialog="signup"
                    triggerText="Sign up"
                    size="lg"
                    variant="primary"
                    fluid
                  />
                  <AuthDialog
                    dialog="login"
                    triggerText="Log in"
                    size="lg"
                    variant="secondaryGray"
                    fluid
                  />
                </MobileMenu>
              )}
            </MobileOnly>
            <DesktopOnly>
              <Flex css={{ gap: '$3' }}>
                <AuthDialog
                  dialog="login"
                  triggerText="Log in"
                  size="lg"
                  variant="tertiaryGray"
                />
                <AuthDialog
                  dialog="signup"
                  triggerText="Sign up"
                  size="lg"
                  variant="primary"
                />
              </Flex>
            </DesktopOnly>
          </Navigation>
        </Container>
      </Header>
      <Container>
        <Hero
          direction={{ '@initial': 'column', '@desktop': 'row' }}
          align="center"
          css={{
            gap: '$12',

            '& svg': { w: '100%', flex: 1, h: '$fit' },
            '@desktop': {
              gap: '$8',
              '& svg': { minW: 448, flex: 0, w: 'revert' },
            },
          }}
        >
          <HeroText
            direction="column"
            css={{
              gap: '$4',
              flexShrink: 1,
              pos: 'relative',
              '@tablet': { maxW: '$2xl', gap: '$6' },
            }}
          >
            <Heading
              size={{
                '@initial': 'md',
                '@tablet': 'xl',
              }}
              as="h1"
              weight="semibold"
              color="gray12"
            >
              Transform your life through the power of journaling
            </Heading>
            <Text
              size={{
                '@initial': 'lg',
                '@tablet': 'xl',
              }}
              weight="regular"
              color="gray"
              css={{
                mb: '$4',
                '@tablet': { mb: 0 },
              }}
            >
              Capture your thoughts, reflect on your experiences, explore your
              emotions, and ignite your potential for personal growth and
              self-discovery.
            </Text>
            <AuthDialog
              dialog="signup"
              triggerText="Get started - It's free!"
              size={{
                '@initial': 'xl',
                '@tablet': '2xl',
              }}
              fluid={{
                '@initial': true,
                '@tablet': false,
              }}
              variant="primary"
            />
          </HeroText>
          <Shapes />
        </Hero>
      </Container>
    </Wrapper>
  );
};

export default Home;
