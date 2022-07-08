import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      'html, body': {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
    },
  },
  colors: {
    brandBlue: '#1A389B',
  },
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export default extendTheme(theme);
