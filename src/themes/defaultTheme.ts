import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0D65D9',
      contrastText: '#DDECFF'
    },
    secondary: {
      main: '#92c1ff',
      contrastText: '#f2f2f2'
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280'
    }
  },
  typography: {
    allVariants: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontStyle: 'normal',
    },
    h4: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '137.5%'
    },
    button: {
      fontWeight: 600,
      lineHeight: '137.5%'
    },
    body1: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '150%'
    },
    body2: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '157%'
    },
  }
})
