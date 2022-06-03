import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DarkTheme, Button, Provider as PaperProvider } from 'react-native-paper';
import SheetComponent from './Components/SheetComponent';


const Settings = () => {
    return (
      <View>
        <SheetComponent />
      </View>
    );
};

export default Settings;