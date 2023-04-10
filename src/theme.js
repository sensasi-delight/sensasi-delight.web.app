import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e1e',
      secondary: '#333333',
      tertiary: '#252525'
    },
    footer: {
      primary: '#007acc',
      secondary: '#16825d'
    },
    text: {
      secondary: '#7d7d7d'
    }
  },
  components: {
    sidebar: {
      background: '#333333',
      width: 48
    },
    card: {
      maxWidth: 300,
    }
  }
});

export default theme;
