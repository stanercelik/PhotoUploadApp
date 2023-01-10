import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyle from '../utils/GlobalStyle';

export default function SecondScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('MainPage');
  };

  return (
    <View style={styles.bodyMain}>
      <Pressable onPress={onPressHandler}>
        <Text style={GlobalStyle.bigText}>go back to first page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
