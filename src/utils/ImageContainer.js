import React, {useState} from 'react';

import {Text, StyleSheet, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import MyColors from '../constraints/MyColors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ImageContainer({onPressFun, text, iconName}) {
  return (
    <View style={styles.cardStyle}>
      <Pressable onPress={onPressFun} style={styles.pressableStyle}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', marginEnd: 4}}>
            <Icon
              backgroundColor="transparent"
              color={MyColors.white}
              size={30}
              name={iconName}></Icon>
          </View>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: MyColors.addPhotoColor,
    borderRadius: 8,
    marginTop: 4,
    borderWidth: 1,
  },
  textStyle: {
    color: MyColors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  pressableStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//
