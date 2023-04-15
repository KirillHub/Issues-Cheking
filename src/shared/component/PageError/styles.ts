import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from '../Icon/index';

import imageBackground from './assets/supermoon.jpg';

export const ErrorPage = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8)
}));

export const ErrorPageInner = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  maxWidth: 1440,
  padding: theme.spacing(20, 0),
  backgroundImage: `url(${imageBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(14, 0)
  }
}));

export const ErrorBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  margin: '0 auto',
  maxWidth: 480,
  padding: theme.spacing(4),
  borderRadius: 3,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: `0 1px 0 ${theme.palette.text.disabled}`,
  backgroundColor: theme.palette.background.paper
}));

export const StyledIcon = styled(Icon)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  fontSize: 30,
  color: theme.palette.primary.main
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  fontSize: 29
}));
