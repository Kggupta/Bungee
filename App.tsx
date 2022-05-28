import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Nav';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}