import { Box, styled } from '@mui/material';
import { CustomThemeOptions } from '../types/theme';

export const ProjectWrapper = styled(Box)(({ theme }: { theme: CustomThemeOptions }) => ({
  margin: '3em',
  borderRadius: '2em',
  padding: '1.8em',
  backgroundColor: theme.palette.primary.main
}));
