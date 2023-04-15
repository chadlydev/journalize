import { createStitches } from '@stitches/react';
import {
  cyan,
  cyanA,
  slate,
  slateA,
  tomato,
  tomatoA,
  grass,
  grassA,
  blackA,
  whiteA,
} from '@radix-ui/colors';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...slateA,
      ...cyan,
      ...cyanA,
      ...tomato,
      ...tomatoA,
      ...grass,
      ...grassA,
      ...blackA,
      ...whiteA,

      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',

      // Primary
      primary1: '$cyan1',
      primary2: '$cyan2',
      primary3: '$cyan3',
      primary4: '$cyan4',
      primary5: '$cyan5',
      primary6: '$cyan6',
      primary7: '$cyan7',
      primary8: '$cyan8',
      primary9: '$cyan9',
      primary10: '$cyan10',
      primary11: '$cyan11',
      primary12: '$cyan12',
      primaryA1: '$cyanA1',
      primaryA2: '$cyanA2',
      primaryA3: '$cyanA3',
      primaryA4: '$cyanA4',
      primaryA5: '$cyanA5',
      primaryA6: '$cyanA6',
      primaryA7: '$cyanA7',
      primaryA8: '$cyanA8',
      primaryA9: '$cyanA9',
      primaryA10: '$cyanA10',
      primaryA11: '$cyanA11',
      primaryA12: '$cyanA12',

      // Gray
      gray1: '$slate1',
      gray2: '$slate2',
      gray3: '$slate3',
      gray4: '$slate4',
      gray5: '$slate5',
      gray6: '$slate6',
      gray7: '$slate7',
      gray8: '$slate8',
      gray9: '$slate9',
      gray10: '$slate10',
      gray11: '$slate11',
      gray12: '$slate12',
      grayA1: '$slateA1',
      grayA2: '$slateA2',
      grayA3: '$slateA3',
      grayA4: '$slateA4',
      grayA5: '$slateA5',
      grayA6: '$slateA6',
      grayA7: '$slateA7',
      grayA8: '$slateA8',
      grayA9: '$slateA9',
      grayA10: '$slateA10',
      grayA11: '$slateA11',
      grayA12: '$slateA12',

      // Error
      error1: '$tomato1',
      error2: '$tomato2',
      error3: '$tomato3',
      error4: '$tomato4',
      error5: '$tomato5',
      error6: '$tomato6',
      error7: '$tomato7',
      error8: '$tomato8',
      error9: '$tomato9',
      error10: '$tomato10',
      error11: '$tomato11',
      error12: '$tomato12',
      errorA1: '$tomatoA1',
      errorA2: '$tomatoA2',
      errorA3: '$tomatoA3',
      errorA4: '$tomatoA4',
      errorA5: '$tomatoA5',
      errorA6: '$tomatoA6',
      errorA7: '$tomatoA7',
      errorA8: '$tomatoA8',
      errorA9: '$tomatoA9',
      errorA10: '$tomatoA10',
      errorA11: '$tomatoA11',
      errorA12: '$tomatoA12',

      // Success
      success1: '$grass1',
      success2: '$grass2',
      success3: '$grass3',
      success4: '$grass4',
      success5: '$grass5',
      success6: '$grass6',
      success7: '$grass7',
      success8: '$grass8',
      success9: '$grass9',
      success10: '$grass10',
      success11: '$grass11',
      success12: '$grass12',
      successA1: '$grassA1',
      successA2: '$grassA2',
      successA3: '$grassA3',
      successA4: '$grassA4',
      successA5: '$grassA5',
      successA6: '$grassA6',
      successA7: '$grassA7',
      successA8: '$grassA8',
      successA9: '$grassA9',
      successA10: '$grassA10',
      successA11: '$grassA11',
      successA12: '$grassA12',
    },
    space: {
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    sizes: {
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      max: 'max-content',
      min: 'min-content',
      fit: 'fit-content',
      full: '100%',
      '3xs': '14rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '90rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fonts: {
      euclid: 'Euclid Circular B, apple-system, sans-serif',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      none: 1,
      xs: 1.25,
      sm: 1.375,
      md: 1.5,
      lg: 1.625,
      xl: 2,
    },
    letterSpacings: {
      sm: '-0.02em',
      md: '0',
    },
    radii: {
      none: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      xs: '0px 1px 2px 0px rgba(0,0,0,0.05)',
      xsPrimary: '0px 1px 2px 0px rgba(0,0,0,0.05), 0px 0px 0px 4px #c4eaef',
      xsError: '0px 1px 2px 0px rgba(0,0,0,0.05), 0px 0px 0px 4px #fdd8d3',
      xsGray: '0px 1px 2px 0px rgba(0,0,0,0.05), 0px 0px 0px 4px #eceef0',
      sm: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)',
      smPrimary:
        '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06), 0px 0px 0px 4px #c4eaef',
      smError:
        '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06), 0px 0px 0px 4px #fdd8d3',
      smGray:
        '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06), 0px 0px 0px 4px #eceef0',
      md: '0px 4px 8px -2px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.06)',
      lg: '0px 12px 16px -4px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.03)',
      xl: '0px 20px 24px -4px rgba(0,0,0,0.08), 0px 8px 8px -4px rgba(0,0,0,0.03)',
      '2xl': '0px 24px 48px -12px rgba(0,0,0,0.18)',
      '3xl': '0px 32px 64px -12px rgba(0,0,0,0.14)',
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      dialog: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    transitions: {
      ease: '0.2s ease-in-out',
    },
  },
  media: {
    tablet: '(min-width: 48rem)',
    desktop: '(min-width: 64rem)',
  },
  utils: {
    // Margin
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginBlockStart: value,
    }),
    mr: (value) => ({
      marginInlineEnd: value,
    }),
    mb: (value) => ({
      marginBlockEnd: value,
    }),
    ml: (value) => ({
      marginInlineStart: value,
    }),
    mx: (value) => ({
      marginInline: value,
    }),
    my: (value) => ({
      marginBlock: value,
    }),

    // Padding
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingBlockStart: value,
    }),
    pr: (value) => ({
      paddingInlineEnd: value,
    }),
    pb: (value) => ({
      paddingBlockEnd: value,
    }),
    pl: (value) => ({
      paddingInlineStart: value,
    }),
    px: (value) => ({
      paddingInline: value,
    }),
    py: (value) => ({
      paddingBlock: value,
    }),

    // Background
    bg: (value) => ({
      background: value,
    }),
    bgColor: (value) => ({
      backgroundColor: value,
    }),
    bgGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // Typography
    fs: (value) => ({
      fontSize: value,
    }),
    ff: (value) => ({
      fontFamily: value,
    }),
    fw: (value) => ({
      fontWeight: value,
    }),
    lh: (value) => ({
      lineHeight: value,
    }),
    ls: (value) => ({
      letterSpacing: value,
    }),
    ta: (value) => ({
      textAlign: value,
    }),
    td: (value) => ({
      textDecoration: value,
    }),
    tt: (value) => ({
      textTransform: value,
    }),
    va: (value) => ({
      verticalAlign: value,
    }),

    // Layout, width and height
    w: (value) => ({
      width: value,
    }),
    minW: (value) => ({
      minWidth: value,
    }),
    maxW: (value) => ({
      maxWidth: value,
    }),
    h: (value) => ({
      height: value,
    }),
    minH: (value) => ({
      minHeight: value,
    }),
    maxH: (value) => ({
      maxHeight: value,
    }),
    size: (value) => ({
      width: value,
      height: value,
    }),
    d: (value) => ({
      display: value,
    }),
    pos: (value) => ({
      position: value,
    }),
    br: (value) => ({
      borderRadius: value,
    }),
  },
  prefix: 'stitches',
});

export const globalStyles = globalCss({
  // Custom Fonts
  '@font-face': [
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-Regular.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-Regular.woff') format('woff') ",
      fontWeight: '400',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-RegularItalic.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-RegularItalic.woff') format('woff') ",
      fontWeight: '400',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-Medium.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-Medium.woff') format('woff') ",
      fontWeight: '500',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-MediumItalic.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-MediumItalic.woff') format('woff') ",
      fontWeight: '500',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-Semibold.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-Semibold.woff') format('woff') ",
      fontWeight: '600',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-SemiboldItalic.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-SemiboldItalic.woff') format('woff') ",
      fontWeight: '600',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-Bold.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-Bold.woff') format('woff') ",
      fontWeight: '700',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/fonts/fonts/EuclidCircularB-BoldItalic.woff2') format('woff2'), url('/fonts/fonts/EuclidCircularB-BoldItalic.woff') format('woff') ",
      fontWeight: '700',
      fontStyle: 'italic',
    },
  ],

  // CSS Reset
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    m: '0',
  },

  'html, body': {
    h: '$full',
  },

  body: {
    bgColor: '$gray1',
    color: '$gray12',
    ff: '$euclid',
    lh: '$md',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'auto',
    textRendering: 'optimizeSpeed',
  },

  'img, picture, video, canvas, svg': {
    d: 'block',
    maxW: '$full',
  },

  'input, button, textarea, select, a': {
    font: 'inherit',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  '#__next': {
    isolation: 'isolate',
  },

  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  '@media (prefers-reduced-motion:reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
});
