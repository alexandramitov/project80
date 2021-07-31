import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from 'react-navigation-native'
import { createStackNavigator, StackView } from 'react-navigation-stack';

import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import HomeScreen from './screens/HomeScreen';



export default function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name= "Home" component={HomeScreen}/>
        <Stack.Screen name= "SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name= "DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name= "StarMap" component={StarMapScreen}/>

      </StackView.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
