import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyle from '../utils/GlobalStyle';
import SessionCard from '../utils/SessionCard';
import CustomCreateButton from '../utils/CustomCreateButton';
import MyStrings from '../constraints/MyStrings';
import {useDispatch, useSelector} from 'react-redux';
import {setSessionID, setSessions} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default MainPage = ({navigation}) => {
  const {sessionID, sessions} = useSelector(state => state.sessionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //
    getSessions();
  }, []);

  //Get sessions from AsyncStorage
  const getSessions = () => {
    AsyncStorage.getItem('Sessions')
      .then(sessions => {
        const parsedSessions = JSON.parse(sessions);
        // Add to sessions
        dispatch(setSessions(parsedSessions));
      })
      .catch(err => console.log(err));
  };

  const onPressNavigate = item => {
    dispatch(setSessionID(item.sessionID)),
      //DEBUG PRINT
      console.log('ItemID:', item.sessionID),
      navigation.navigate('SecondScreen');
  };

  const onPressNavigateAndAdd = () => {
    dispatch(setSessionID(sessions.length + 1));
    //DEBUG PRINT
    console.log('Session Id: ', sessionID);
    navigation.navigate('SecondScreen');
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
                <SessionCard title="Session " index={index + 1}></SessionCard>
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
  },
});
