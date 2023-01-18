import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import 'react-native-gesture-handler';
import GlobalStyle from '../utils/GlobalStyle';
import {launchCamera} from 'react-native-image-picker';
import CustomCreateButton from '../utils/CustomCreateButton';
import MyStrings from '../constraints/MyStrings';
import ImageContainer from '../utils/ImageContainer';
import MyColors from '../constraints/MyColors';
import {useDispatch, useSelector} from 'react-redux';
import {setSessions, setSessionID} from '../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SecondScreen({navigation}) {
  const dispatch = useDispatch();
  const {sessions, sessionID} = useSelector(state => state.sessionReducer);

  const [uriList, setUriList] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    //Find correct session with sessionID's
    const SessionGet = sessions.find(ses => ses.ID === sessionID);
    if (SessionGet) {
      //Get the correct session
      setUriList(SessionGet.photoList);
    }
  };

  const onPressNavigateMP = () => {
    try {
      var Session = {
        ID: sessionID,
        photoList: uriList,
      };

      //New session added to newSessions list.
      let newSession = [...sessions, Session];
      AsyncStorage.setItem('Sessions', JSON.stringify(newSession))
        .then(() => {
          // newSession added to Sessions list
          dispatch(setSessions(newSession));
          Alert.alert('Success!', 'Task saved succesfully.');
          navigation.navigate('MainPage');
        })
        .catch(err => console.log(err));
    } catch (error) {
      //FOR DEBUG
      /*console.log('sessionId: ', sessionID);
      uriList.forEach(item => {
        console.log('foto: ', item);
      });*/
      console.log(error);
    }
  };

  return (
    <View style={GlobalStyle.bodyMain}>
      <View style={{flex: 1}}>
        <Text style={GlobalStyle.bigText}>{MyStrings.emptySecondPage}</Text>
      </View>
      {
        <View stye={{flex: 1, justifyContent: 'center'}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            horizontal
            style={{
              backgroundColor: MyColors.backgroundColor,
              marginHorizontal: 6,
            }}
            data={uriList}
            renderItem={({item, index}) => (
              <Image
                style={GlobalStyle.imageStyle}
                source={{uri: uriList[index]}}
              />
            )}
          />
        </View>
      }
      <ImageContainer
        text="Add Photo"
        onPressFun={async () => {
          try {
            //PERMISSIONS
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'App Camera Permission',
                message: 'App needs access to your camera ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            const perm = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Gallery Permission',
                message: 'App needs access to your gallery ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );

            if (
              granted === PermissionsAndroid.RESULTS.GRANTED &&
              perm === PermissionsAndroid.RESULTS.GRANTED
            ) {
              console.log('Camera permission given');
              console.log('Gallery permission given');

              launchCamera(
                {
                  mediaType: 'photo',
                  quality: 1,
                  includeBase64: false,
                  saveToPhotos: true,
                },
                res => {
                  //Taken photo added to uriList
                  setUriList([...uriList, res.assets[0].uri]);
                  console.log('res', res);
                },
              );
            } else {
              console.log('Camera permissions failed');
            }
          } catch (error) {
            console.warn(error);
          }
        }}></ImageContainer>

      <CustomCreateButton
        text={MyStrings.secondPageButton}
        onPressFunction={onPressNavigateMP}></CustomCreateButton>
    </View>
  );
}

const styles = StyleSheet.create({});
