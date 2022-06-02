export const COLORS = {
  DEFAULT_PAGE_THEME_COLOR: '#0E2439',
  DEFAULT_PAGE_THEME_LIGHT_COLOR: '#1F364D',
  DEFAULT_PAGE_THEME_LIGHTEST_COLOR: '#376DA0',
  LINK_TEXT: '#e6990b',
  SUB_TEXT: '#9AB4CD',
  NAMED: {
    WHITE: '#FEFEFE',
  },
};

export const mediaQuery = (minWidth: number) => `
    @media (min-width: ${minWidth}px)
`;

export const theme = {
  palette: {
    background: {
      default: COLORS.DEFAULT_PAGE_THEME_COLOR,
    },
    border: COLORS.DEFAULT_PAGE_THEME_LIGHT_COLOR,
    highlight: COLORS.DEFAULT_PAGE_THEME_LIGHT_COLOR,
    icon: COLORS.DEFAULT_PAGE_THEME_LIGHTEST_COLOR,
  },
  button: {
    background: COLORS.LINK_TEXT,
    color: '#fff',
  },
  typography: {
    head1: {
      fontSize: '2.8rem',
      color: COLORS.NAMED.WHITE,
      fontWeight: 700,
    },
    head2: {
      fontSize: '2.4rem',
      color: COLORS.NAMED.WHITE,
      fontWeight: 700,
    },
    title: {
      fontSize: '2rem',
      color: COLORS.NAMED.WHITE,
      fontWeight: 700,
    },
    body: {
      fontSize: '1.6rem',
      color: COLORS.NAMED.WHITE,
      fontWeight: 'normal',
    },
    caption: {
      fontSize: '1.6rem',
      color: COLORS.SUB_TEXT,
      fontWeight: 'normal',
    },
  },
  media: {
    xlarge: mediaQuery(1200),
    large: mediaQuery(1024),
    medium: mediaQuery(768),
    small: mediaQuery(376),
  },
};
