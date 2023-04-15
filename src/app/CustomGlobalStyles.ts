import { styled } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { CustomMixins, CustomThemeOptions, CustomTypography } from '../types/theme';

// : { theme: Theme & CustomMixins & CustomTypography }

export const CustomGlobalStyles = styled('main')(({ theme }: { theme: CustomThemeOptions }) => ({
  width: '100vw',
  height: '100vh',
  position: 'relative',

  fontFamily: theme.typography.fontFamily,

  h1: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: `${theme.typography.h1.fontSize}em`
  },
  h2: {
    fontFamily: theme.typography.h2.fontFamily,
    fontSize: `${theme.typography.h2.fontSize}em`
  },
  h3: {
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: `${theme.typography.h3.fontSize}em`
  },
  h4: {
    fontFamily: theme.typography.h4.fontFamily,
    fontSize: `${theme.typography.h4.fontSize}em`
  },
  h5: {
    fontFamily: theme.typography.h5.fontFamily,
    fontSize: `${theme.typography.h5.fontSize}em`
  },
  h6: {
    fontFamily: theme.typography.h6.fontFamily,
    fontSize: `${theme.typography.h6.fontSize}em`
  },

  p: {
    lineHeight: 1.4285,
    color: theme.customMixins.color()
  },
  a: {
    color: theme.customMixins.link()
  },

  '::placeholder': {
    color: theme.customMixins.link()
  },

  backgroundColor: theme.palette.background.default
}));
