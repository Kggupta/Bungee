import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Settings from '../Views/Settings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Data from '../Views/Data';
import Statistics from '../Views/Statistics';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute', 
                    bottom: 25,
                    left:20,
                    right:20,
                    backgroundColor: '#000',
                    borderRadius: 10,
                    height:90,
                    ... styles.shadow
                 },
                 tabBarShowLabel: false
            }}>
            <Tab.Screen name="Settings" component={Settings}
                options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Icon name="settings" color={focused ? '#2b752f' : 'white'} size={25}/>
                        <Text style={{color: focused ? '#2b752f' : 'white', fontSize:12}}>SETTINGS</Text>
                    </View>
                )}}/>
            <Tab.Screen name="Data" component={Data}
                options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Icon name="home" color={focused ? '#2b752f' : 'white'} size={25}/>
                        <Text style={{color: focused ? '#2b752f' : 'white', fontSize:12}}>DATA</Text>
                    </View>
                )}}/>
            <Tab.Screen name="Statistics" component={Statistics}
                options={{tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Icon name="analytics" color={focused ? '#2b752f' : 'white'} size={25}/>
                        <Text style={{color: focused ? '#2b752f' : 'white', fontSize:12}}>STATS</Text>
                    </View>
                )}}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#2b752f',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5
    }
})

export default Tabs;