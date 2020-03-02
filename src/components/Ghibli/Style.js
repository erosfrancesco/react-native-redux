import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const text = {
  textAlign: 'center',
  marginTop: 8,
};

export default StyleSheet.create({
  title: {
    ...text,
    fontSize: 24,
    fontWeight: '800',
    color: Colors.dark,
  },
  normalText: {
    ...text,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  success: {
    ...text,
    fontSize: 24,
    fontWeight: '800',
    color: '#33aa33',
  },
});
