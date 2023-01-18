import React, {useState} from 'react';

import {Text, StyleSheet, View} from 'react-native';
import MyColors from '../constraints/MyColors';

export default function SessionCard({index, title}) {
  const date = () => {
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return day + '-' + month + '-' + year;
  };

  return (
    <View style={styles.cardStyle}>
      <Text style={styles.cardSessionStyle}>
        {title} {index}
      </Text>
      <Text style={styles.cardDateStyle}> - {date()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: MyColors.buttonColor,
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  cardSessionStyle: {
    color: MyColors.white,
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  cardDateStyle: {
    color: MyColors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//
