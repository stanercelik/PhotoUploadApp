import React, {useState} from 'react';

import {Text, StyleSheet, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import MyColors from '../constraints/MyColors';

export default function ImageContainer({onPressFun, text}) {
  return (
    <View style={styles.cardStyle}>
      <Pressable onPress={onPressFun}>
        <Text style={styles.textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 2,
    backgroundColor: MyColors.addPhotoColor,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 14,
    marginTop: 4,

    borderWidth: 1,
  },
  textStyle: {
    color: MyColors.white,
    fontSize: 32,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

//
