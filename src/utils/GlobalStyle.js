import {StyleSheet} from 'react-native';
import MyColors from '../constraints/MyColors';

export default StyleSheet.create({
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: MyColors.bigTextColor,
  },

  bodyMain: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: MyColors.backgroundColor,
  },

  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 8,
    marginEnd: 8,
  },
});
