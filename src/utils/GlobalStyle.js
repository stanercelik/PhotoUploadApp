import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyColors from '../constraints/MyColors';

export default StyleSheet.create({
  bigText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 18,
    //textAlignVertical: 'center',
  },

  bodyMain: {
    flex: 1,
    backgroundColor: MyColors.backgroundColor,
  },
});
