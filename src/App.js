import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './Screens/MainScreen';
import SecondScreen from './Screens/SecondScreen';

const StackNav = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name="MainPage" component={MainPage}></StackNav.Screen>
        <StackNav.Screen
          name="SecondScreen"
          component={SecondScreen}></StackNav.Screen>
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bodyMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default App;
