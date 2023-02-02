import {Dimensions, StyleSheet} from 'react-native';
export const BaseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 50,
    padding: 15,
    alignSelf: 'center',
    color: 'white',
  },
  text: {
    textAlignVertical: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  image: {
    height: 150,
    width: '100%',
    marginBottom: 12,
  },
  item: {
    width: (Dimensions.get('window').width - 32) / 2,
    marginRight: 12,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 8,
  },
  textBold: {
    fontWeight: 'bold',
    flex: 1,
  },
  textBase: {
    flex: 1,
  },
});
