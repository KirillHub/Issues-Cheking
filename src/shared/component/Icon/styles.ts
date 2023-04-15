import { styled } from '@mui/material/styles';

export const StyledIcon = styled('i')(
  ({ size, left, top }: { size: number; left: number; top: number }) => ({
    display: 'inline-block',
    fontSize: `${size}px`,
    transform: `translate(${left}px, ${top}px)`,
    '&:before': {
      content: '""',
      fontFamily: 'jira !important',
      speak: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }
  })
);
