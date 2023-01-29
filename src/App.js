import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './Screens/MainScreen';
import PhotosScreen from './Screens/PhotosScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyColors from './constraints/MyColors';
import {Provider} from 'react-redux';
import reduxStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const StackNav = createStackNavigator();

function App() {
  const {store, persistor} = reduxStore();
  return (
    //Provider for Redux
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                }}
              />
              <StackNav.Screen
                name="PhotosScreen"
                component={PhotosScreen}
                options={{
                  title: 'Photos Screen',
                  headerTitleStyle: {
                    color: MyColors.white,
                  },
                  headerTintColor: MyColors.white,
                  headerStyle: {
                    backgroundColor: MyColors.headerColor,
                  },
                }}
              />
            </StackNav.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
