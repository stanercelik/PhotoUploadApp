import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyColors from '../constants/MyColors';

export default StyleSheet.create({
  bigText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 32,
    //textAlignVertical: 'center',
  },

  bodyMain: {
    flex: 1,
    backgroundColor: MyColors.backgroundColor,
  },
});
