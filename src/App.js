import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './Screens/MainScreen';
import SecondScreen from './Screens/SecondScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyColors from './constants/MyColors';

const StackNav = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StackNav.Navigator>
          <StackNav.Screen
            name="MainPage"
            component={MainPage}
            options={{
              title: 'My Sessions',
              headerTitleStyle: {
                color: MyColors.white,
              },
              headerStyle: {
                backgroundColor: MyColors.headerColor,
              },
            }}></StackNav.Screen>
          <StackNav.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{
              // title: 'Upload Documents',
              headerTitleStyle: {
                color: MyColors.white,
              },
              headerStyle: {
                backgroundColor: MyColors.headerColor,
              },
            }}></StackNav.Screen>
        </StackNav.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
