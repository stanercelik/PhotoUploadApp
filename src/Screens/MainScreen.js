import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, InteractionManager} from 'react-native';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyle from '../utils/GlobalStyle';
import SessionCard from '../utils/SessionCard';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

export default MainPage = ({navigation}) => {
  const onPressNavigate = () => {
    navigation.navigate('SecondScreen');
  };

  const onPressNavigateAndAdd = () => {
    navigation.navigate('SecondScreen');
    setData([...data, newItem]);
  };

  const [data, setData] = useState([]);

  const [newItem, setNewItem] = useState(
    <SessionCard title="Session"></SessionCard>,
  );

  return (
    <View style={styles.bodyMain}>
      <View style={styles.flatList}>
        {data.length == 0 ? (
          <Text style={GlobalStyle.bigText}>NO SESSION YET</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Pressable onPress={onPressNavigate}>
                <SessionCard title="Session " {...item.index}></SessionCard>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <View style={styles.createSessionbuttonView}>
        <Pressable style={styles.createButton} onPress={onPressNavigateAndAdd}>
          <Text style={styles.buttonTextStyle}>Create Session</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyMain: {
    flex: 1,
    backgroundColor: '#E2D7B6',
  },

  createSessionbuttonView: {
    flex: 2,
    backgroundColor: '#E2B6B6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatList: {
    padding: 8,
    flex: 9,
    alignContent: 'center',
  },

  createButton: {
    backgroundColor: '#309496',
    borderRadius: 12,
    justifyContent: 'center',
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    margin: 8,
  },
});
