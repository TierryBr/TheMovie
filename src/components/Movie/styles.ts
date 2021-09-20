import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25
  },
  image: {
    width: 120,
    height: 160,
    borderRadius: 8
  },
  content: {
    marginLeft: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25
  },
  year: {
    fontSize: 18
  },
  vote: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  numbervote: {
    fontSize: 18,
    backgroundColor: 'gray',
    color: '#fff',
    width: 70,
    borderRadius: 15,
    padding: 3,
    textAlign: 'center'
  }
});
