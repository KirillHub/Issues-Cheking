import { Mixins, PaletteMode, ThemeOptions } from '@mui/material';
import { MixinsOptions } from '@mui/material/styles/createMixins';
import { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

type ToggleColorMode = {
  toggleColorMode: () => void;
};

interface CustomMixins extends MixinsOptions {
  customMixins: {
    placeholderColor: (colorValue?: string) => ReturnType<typeof css>;
    backgroundImage: (imageURL: string) => ReturnType<typeof css>;
    link: (colorValue?: string) => ReturnType<typeof css>;
    color: (colorValue?: string) => ReturnType<typeof css>;
    boxShadowMedium: FlattenSimpleInterpolation;
    boxShadowDropdown: FlattenSimpleInterpolation;
    clickable: FlattenSimpleInterpolation;
    hardwareAccelerate: FlattenSimpleInterpolation;
    cover: FlattenSimpleInterpolation;
    scrollableY: FlattenSimpleInterpolation;
  };
}

interface CustomPalette {
  palette: {
    mode: 'dark' | 'light';
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
    background: {
      default: string;
    };
  };
}

interface CustomTypography {
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontFamily: string;
      fontSize: number;
    };
    h2: {
      fontFamily: string;
      fontSize: number;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
    };
    h4: {
      fontFamily: string;
      fontSize: number;
    };
    h5: {
      fontFamily: string;
      fontSize: number;
    };
    h6: {
      fontFamily: string;
      fontSize: number;
    };
  };
}

interface CustomThemeOptions extends DefaultTheme, CustomTypography, CustomPalette, CustomMixins {}

type ThemeSettings = (mode: PaletteMode) => CustomThemeOptions;

export type {
  ThemeSettings,
  ToggleColorMode,
  CustomPalette,
  CustomTypography,
  CustomMixins,
  CustomThemeOptions
};
