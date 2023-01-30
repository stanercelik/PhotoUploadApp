import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import MyColors from '../constraints/MyColors';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCreateButton = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: props.selectedImage}}
        />
        <TouchableOpacity
          style={styles.backButtonStyle}
          onPress={props.onPressFunc}>
          <Icon
            backgroundColor="transparent"
            color={MyColors.white}
            size={22}
            name={props.iconName}></Icon>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backButtonStyle: {
    margin: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: MyColors.black,
    backgroundColor: MyColors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomCreateButton;
