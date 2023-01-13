import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import GlobalStyle from '../utils/GlobalStyle';
import {launchCamera} from 'react-native-image-picker';
import CustomCreateButton from '../utils/CustomCreateButton';
import MyStrings from '../constants/MyStrings';

export default function SecondScreen({navigation}) {
  const onPressNavigateMP = () => {
    navigation.navigate('MainPage');
  };

  return (
    <View style={GlobalStyle.bodyMain}>
      <Text style={GlobalStyle.bigText}>Uploaded Document</Text>
      <CustomCreateButton
        text={MyStrings.secondPageButton}
        onPressFunction={onPressNavigateMP}></CustomCreateButton>
      <TouchableOpacity
        onPress={async () => {
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
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Camera permission given');

              launchCamera({mediaType: 'photo', quality: 1}, res => {
                console.log('res', res);
              });
            } else {
              console.log('Camera permission denied');
            }
          } catch (error) {
            console.warn(error);
          }
        }}>
        <Text> RESİM ÇEK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
  },
});
