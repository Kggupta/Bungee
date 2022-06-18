import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Tabs from './src/Navigation/Nav';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer theme={DarkTheme}>
        <Tabs />
      </NavigationContainer>
    </PaperProvider>
    
  );
}