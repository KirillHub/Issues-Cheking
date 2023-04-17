import { createContext, useMemo, useState } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { CustomMixins, CustomThemeOptions, ThemeSettings, ToggleColorMode } from '../types/theme';
import { css } from 'styled-components';
import { fallbackFont, primaryFont } from '../shared/constans/fonts';
import { MixinsOptions } from '@mui/material/styles/createMixins';

// color design tokens
export const tokens = (mode: string) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414'
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509'
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922'
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f'
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632'
        }
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0'
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5'
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee'
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb'
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe'
        }
      })
});

export const themeSettings: ThemeSettings = mode => {
  const colors = tokens(mode);

  return {
    customMixins: {
      color: (colorValue = mode === 'dark' ? colors.grey[300] : colors.grey[700]) => css`
        color: ${colorValue} !important;
      `,
      boxShadowMedium: css`
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
      `,
      boxShadowDropdown: css`
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
      `,
      clickable: css`
        cursor: pointer;
        user-select: none;
      `,
      hardwareAccelerate: css`
        transform: translateZ(0);
      `,
      cover: css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      `,
      scrollableY: css`
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      `,
      placeholderColor: (
        colorValue = mode === 'dark' ? colors.primary[300] : colors.primary[700]
      ) => css`
        ::-webkit-input-placeholder {
          color: ${colorValue} !important;
          opacity: 1 !important;
        }
        :-moz-placeholder {
          color: ${colorValue} !important;
          opacity: 1 !important;
        }
        ::-moz-placeholder {
          color: ${colorValue} !important;
          opacity: 1 !important;
        }
        :-ms-input-placeholder {
          color: ${colorValue} !important;
          opacity: 1 !important;
        }
      `,
      backgroundImage: (imageURL: string) => css`
        background-image: url('${imageURL}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
      `,
      link: (colorValue = mode === 'dark' ? colors.blueAccent[300] : colors.blueAccent[600]) => css`
        cursor: pointer;
        color: ${colorValue};
        text-decoration: none;
        &:hover,
        &:visited,
        &:active {
          color: ${colorValue};
        }
        &:hover {
          text-decoration: underline;
        }
      `
    },
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[800]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: colors.primary[500]
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[400]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: '#fcfcfc'
            }
          })
    },
    typography: {
      fontFamily: [primaryFont, fallbackFont].join(','),
      fontSize: 16,
      h1: {
        fontFamily: [primaryFont, fallbackFont].join(','),
        fontSize: 2.25 //36px
      },
      h2: {
        fontFamily: [primaryFont, fallbackFont].join(','),
        fontSize: 1.875 // 30px
      },
      h3: {
        fontFamily: [primaryFont, fallbackFont].join(','),
        fontSize: 1.625 // 26px
      },
      h4: {
        fontFamily: [primaryFont, fallbackFont].join(','),
        fontSize: 1.375 // 22px
      },
      h5: {
        fontFamily: [primaryFont, fallbackFont].join(','),
        fontSize: 1.25 // 20px
      },
      h6: {
        fontFamily: [primaryFont, fallbackFont].join(','),
        fontSize: 1.125 // 18px
      }
    }
  };
};

// context for color mode
export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {}
});

// interface Custom extends Theme, Partial<CustomThemeOptions> {}

export const useMode = (): [CustomThemeOptions, ToggleColorMode] => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]) as Theme &
    CustomThemeOptions;

  return [theme, colorMode];
};
