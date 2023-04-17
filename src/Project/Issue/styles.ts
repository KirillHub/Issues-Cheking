import { Avatar, Box, css, Link, styled } from '@mui/material';
import { color } from '../../styles/styles';

export const IssueLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;

export const Issue = styled(Box)(({ isBeingDragged }) => ({
  padding: '10px',
  borderRadius: '3px',
  background: '#fff',
  boxShadow: '0px 1px 2px 0px rgba(9, 30, 66, 0.25)',
  transition: 'background 0.1s',
  cursor: 'pointer',
  '@media (max-width: 1100px)': {
    padding: '10px 8px'
  },
  '&:hover': {
    background: color.backgroundLight
  },
  ...(isBeingDragged && {
    transform: 'rotate(3deg)',
    boxShadow: '5px 10px 30px 0px rgba(9, 30, 66, 0.15)'
  })
}));

export const Title = styled(Box)(({ theme }) => ({
  paddingBottom: '11px',
  fontSize: '15px',
  '@media (max-width: 1100px)': {
    fontSize: '14.5px'
  },
  ...theme.typography.subtitle1
}));

export const Bottom = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const Assignees = styled(Box)({
  display: 'flex',
  flexDirection: 'row-reverse',
  marginLeft: '2px'
});

export const AssigneeAvatar = styled(Avatar)({
  marginLeft: '-2px',
  boxShadow: '0 0 0 2px #fff'
});
