import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyle from '../utils/GlobalStyle';
import SessionCard from '../utils/SessionCard';
import CustomCreateButton from '../utils/CustomCreateButton';
import MyStrings from '../constraints/MyStrings';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteSession} from '../redux/action';

export default MainPage = ({navigation}) => {
  const {sessions} = useSelector(state => state.sessionReducer);
  const dispatch = useDispatch();

  const onPressNavigate = item => {
    const {id = 0} = item;
    navigation.navigate('PhotosScreen', {
      itemID: id,
    });
  };

  const deleteFunctionOnPress = itemId => {
    const deletedObject = sessions.find(obj => obj.id === itemId);
    dispatch(DeleteSession(deletedObject));
  };

  const onPressNavigateAndAdd = () => {
    navigation.navigate('PhotosScreen', {itemID: null});
  };

  return (
    <View style={GlobalStyle.bodyMain}>
      <View style={styles.flatList}>
        {sessions.length == 0 ? (
          <Text style={styles.bigText}>{MyStrings.emptyMainPage}</Text>
        ) : (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={sessions}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  onPressNavigate(item);
                }}>
                <SessionCard
                  title="Session "
                  index={item.id}
                  date={item.date}
                  func={() => {
                    deleteFunctionOnPress(item.id);
                  }}></SessionCard>
              </Pressable>
            )}
          />
        )}
      </View>
      <View style={{flex: 2}}>
        <CustomCreateButton
          text={MyStrings.mainPageButton}
          iconName="photo"
          onPressFunction={onPressNavigateAndAdd}></CustomCreateButton>
      </View>
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
  },
});
