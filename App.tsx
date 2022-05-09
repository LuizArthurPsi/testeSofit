import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/hooks';

import theme from './src/global/styles/theme';

import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <SignIn />
      </AppProvider>
    </ThemeProvider>
  );
}
