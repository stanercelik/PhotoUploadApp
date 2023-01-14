import React, {useState} from 'react';
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

export default function SecondScreen({navigation}) {
  const [photoList, setPhotoList] = useState([]);

  const onPressNavigateMP = () => {
    navigation.navigate('MainPage');
  };

  return (
    <View style={GlobalStyle.bodyMain}>
      <Text style={GlobalStyle.bigText}>{MyStrings.emptySecondPage}</Text>
      {
        <View stye={{flex: 1, justifyContent: 'center'}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            horizontal
            style={{
              backgroundColor: MyColors.backgroundColor,
              marginHorizontal: 6,
            }}
            data={photoList}
            renderItem={({item, index}) => (
              <Image
                style={{height: 200, width: 200}}
                {...console.log(photoList[index])} // TEST BURDA NEYİ TUTUYO
                source={{uri: photoList[index]}}
              />
            )}
          />
        </View>
      }
      <ImageContainer
        text="Add Photo"
        onPressFun={async () => {
          try {
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
                  setPhotoList([...photoList, res.assets[0].uri]);
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
