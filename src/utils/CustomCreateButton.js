import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';
import MyColors from '../constants/MyColors';

const CustomCreateButton = props => {
  return (
    <View style={styles.createSessionbuttonView}>
      <Pressable style={styles.createButton} onPress={props.onPressFunction}>
        <Text style={styles.buttonTextStyle}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  createSessionbuttonView: {
    flex: 2,
    backgroundColor: MyColors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  createButton: {
    backgroundColor: MyColors.buttonColor,
    borderRadius: 12,
    justifyContent: 'center',
  },

  buttonTextStyle: {
    color: MyColors.white,
    fontWeight: 'bold',
    fontSize: 22,
    margin: 8,
  },
});

export default CustomCreateButton;
