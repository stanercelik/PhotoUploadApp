import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import MyColors from '../constraints/MyColors';

export default function SessionCard({title, index, date, func}) {
  return (
    <View style={styles.cardStyle}>
      <View style={{flex: 9, flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={styles.cardSessionStyle}>
          {title} {index}
        </Text>
        <Text style={styles.cardDateStyle}> - {date}</Text>
      </View>
      <View style={{flex: 1, alignSelf: 'center', flexDirection: 'row'}}>
        <Pressable onPress={func}>
          <Icon
            backgroundColor="transparent"
            color={MyColors.red}
            size={28}
            borderRadius={10}
            name="trash-o"></Icon>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    backgroundColor: MyColors.buttonColor,
    alignSelf: 'center',
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  cardSessionStyle: {
    color: MyColors.white,
    fontSize: 18,
    marginLeft: 6,
    fontWeight: 'bold',
  },
  cardDateStyle: {
    color: MyColors.white,
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
});

//
