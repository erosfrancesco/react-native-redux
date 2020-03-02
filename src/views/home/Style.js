import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    color: Colors.dark,
  },
  body: {
    backgroundColor: Colors.lighter,
    color: Colors.dark,
  },
  wrapper: {
    marginTop: 18,
    marginBottom: 18,
  },

  titleText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
  },
  normalText: {
    textAlign: 'center',
    marginTop: 18,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});
