import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: blue[600],
      dark: blue[800],
      light: blue[400],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[500],
      dark: grey[700],
      light: grey[100],
      contrastText: '#fff',
    },
  },
});
