import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import GlobalStyle from '../utils/GlobalStyle';
import {launchCamera} from 'react-native-image-picker';
import CustomCreateButton from '../utils/CustomCreateButton';
import MyStrings from '../constraints/MyStrings';
import ImageContainer from '../utils/ImageContainer';
import MyColors from '../constraints/MyColors';
import {useDispatch, useSelector} from 'react-redux';
import {AddSession, UpdateSession} from '../redux/action';

export default function PhotosScreen({navigation, route}) {
  const dispatch = useDispatch();
  const {sessions} = useSelector(state => state.sessionReducer);
  const [uriList, setUriList] = useState([]);

  const selectedSession = sessions.find(obj => obj.id === route.params?.itemID);

  useEffect(() => {
    uriListFun();
  }, []);

  const uriListFun = () => {
    if (selectedSession) {
      let clonedArray = JSON.parse(JSON.stringify(selectedSession.photoList));
      setUriList(clonedArray);
    }
  };

  const createObject = id => {
    return (NewSessionObject = {
      id: id,
      photoList: uriList,
      date: createDate(),
    });
  };

  const deleteImage = index => {
    delete uriList[index];
    const filteredImages = uriList.filter(item => item !== index);
    setUriList(filteredImages);
  };

  const createDate = () => {
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    return day + '-' + month + '-' + year + '  ' + hours + ':' + minutes;
  };

  const CompleteSession = () => {
    try {
      if (!selectedSession) {
        const NewSessionObject = createObject(sessions.length + 1);
        dispatch(AddSession(NewSessionObject));
        navigation.navigate('MainPage');
      } else {
        const NewSelectedObj = createObject(selectedSession.id);
        dispatch(UpdateSession(NewSelectedObj));
        navigation.navigate('MainPage');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ImageContainerFunction = async () => {
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
          },
        );
      } else {
        console.log('Camera permissions failed');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={GlobalStyle.bodyMain}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={GlobalStyle.bigText}>{MyStrings.emptySecondPage}</Text>
      </View>
      {
        <View stye={{flex: 1, justifyContent: 'center'}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            horizontal
            style={styles.flatListStyle}
            data={uriList}
            renderItem={({index}) => (
              <View>
                <Image
                  style={GlobalStyle.imageStyle}
                  source={{uri: uriList[index]}}
                />
                <TouchableOpacity
                  style={styles.deleteButtonStyle}
                  onPress={() => {
                    deleteImage(index);
                  }}>
                  <Text style={styles.deleteButtonTextStyle}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      }

      <View style={{flex: 2}}>
        <ImageContainer
          text="Add Photo"
          iconName="photo"
          onPressFun={async () => {
            ImageContainerFunction();
          }}></ImageContainer>
      </View>

      <View style={{flex: 1}}>
        <CustomCreateButton
          text={MyStrings.secondPageButton}
          iconName="check"
          onPressFunction={CompleteSession}></CustomCreateButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteButtonTextStyle: {
    color: MyColors.white,
    fontWeight: 'bold',
  },
  deleteButtonStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: MyColors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListStyle: {
    backgroundColor: MyColors.backgroundColor,
    marginHorizontal: 6,
  },
});
