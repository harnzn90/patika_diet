import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'gainsboro',
    margin:10,
    flexDirection: 'row',
    width: Dimensions.get('window').width-40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:"space-between"
  },
  input: {
    fontSize: 20,
    width: Dimensions.get('window').width-80,
  },
});
