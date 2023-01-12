import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './Screens/MainScreen';
import SecondScreen from './Screens/SecondScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

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
                color: '#FFFFFF',
              },
              headerStyle: {
                backgroundColor: '#CA8036D7',
              },
            }}></StackNav.Screen>
          <StackNav.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={
              {
                //title: 'My Sessions',
              }
            }></StackNav.Screen>
        </StackNav.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
