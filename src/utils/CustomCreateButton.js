import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';
import MyColors from '../constraints/MyColors';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCreateButton = props => {
  return (
    <View style={styles.createSessionbuttonView}>
      <Pressable style={styles.createButton} onPress={props.onPressFunction}>
        <View style={{justifyContent: 'center', marginEnd: 4}}>
          <Icon
            backgroundColor="transparent"
            color={MyColors.white}
            size={22}
            name={props.iconName}></Icon>
        </View>
        <Text style={styles.buttonTextStyle}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  createSessionbuttonView: {
    flex: 1,

    backgroundColor: MyColors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  createButton: {
    flexDirection: 'row',
    backgroundColor: MyColors.buttonColor,
    borderRadius: 12,
    padding: 8,
    justifyContent: 'center',
  },

  buttonTextStyle: {
    color: MyColors.white,
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default CustomCreateButton;
