import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyle from '../utils/GlobalStyle';
import SessionCard from '../utils/SessionCard';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
import CustomCreateButton from '../utils/CustomCreateButton';
import MyStrings from '../constaints/MyStrings';

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
    <SessionCard title="Session "></SessionCard>,
  );

  return (
    <View style={GlobalStyle.bodyMain}>
      <View style={styles.flatList}>
        {data.length == 0 ? (
          <Text style={styles.bigText}>{MyStrings.emptyMainPage}</Text>
        ) : (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item, index}) => (
              <Pressable onPress={onPressNavigate}>
                <SessionCard title="Session " index={index}></SessionCard>
              </Pressable>
            )}
          />
        )}
      </View>
      <CustomCreateButton
        text={MyStrings.mainPageButton}
        onPressFunction={onPressNavigateAndAdd}></CustomCreateButton>
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    padding: 8,
    flex: 9,
    alignContent: 'center',
  },
  bigText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 18,
    //textAlignVertical: 'center',
  },
});
