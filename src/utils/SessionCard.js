import React, {useState} from 'react';

import {Text, StyleSheet, View} from 'react-native';

export default SessionCard = props => {
  const date = () => {
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return day + '-' + month + '-' + year;
  };

  return (
    <View style={styles.cardStyle}>
      <Text style={styles.cardSessionStyle}>{props.title} ------ </Text>
      <Text style={styles.cardDateStyle}>{date()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#309496',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  cardSessionStyle: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  cardDateStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//
