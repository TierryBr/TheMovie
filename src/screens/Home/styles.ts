import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#000'
  },
  list: {
    width: '100%',
    padding: 10,
  },
  item: {
    backgroundColor: '#5604',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25
  },
  image: {
    width: 110,
    height: 160,
    borderRadius: 8
  },
});
