import * as React from 'react';
import { View } from 'react-native';
import PickTerm from './Components/PickTerm';
import SheetComponent from './Components/SheetComponent';


const Settings = () => {
    return (
      <View>
        <SheetComponent />
        <PickTerm />
      </View>
    );
};

export default Settings;