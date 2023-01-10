import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : '#4c956c'},
        styles.buttonStyle,
        {
          ...props.style,
        },
      ]}
      onPress={props.onPressFunction}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '000000',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
  },

  buttonStyle: {
    borderRadius: 15,
    backgroundColor: '#4c956c',
    alignItems: 'center',
  },
});

export default CustomButton;
