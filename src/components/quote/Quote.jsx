import { styled } from 'stitches.config';

//=====================
// STYLED COMPONENTS

const Wrapper = styled('figure', {
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
  py: 24,
  px: 16,
  br: '$xl',
  background: 'linear-gradient(45deg, $primary7, $primary9)',
  color: '$gray1',

  '@desktop': {
    py: 32,
    px: 24,
  },
});

const BlockQuote = styled('blockquote', {
  fs: '$3xl',
  fontStyle: 'italic',
  fw: '$medium',
  lh: '$xs',
  ls: '$sm',
  ta: 'center',

  '&:before': { content: 'open-quote' },
  '&:after': { content: 'close-quote' },
});

const Author = styled('figcaption', {
  fontStyle: 'italic',
  fw: '$medium',
  '&:before': { content: '\\2013' },
});

//=====================
// REACT COMPONENT

const Quote = ({ quote, author }) => {
  return (
    <Wrapper>
      <BlockQuote>{` ${quote} `}</BlockQuote>
      <Author>{` ${author}`}</Author>
    </Wrapper>
  );
};

export default Quote;
