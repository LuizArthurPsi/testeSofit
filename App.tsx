import React from 'react';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import theme from './src/global/styles/theme';

import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>
    </ThemeProvider>
  );
}
