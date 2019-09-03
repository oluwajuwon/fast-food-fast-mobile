import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  centered: {
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  },
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10,
  },
  scrollableList: {
    marginTop: 15
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  deleteAllButton: {
    marginRight: 40
  },
  actions: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  actionBtn: {
    backgroundColor: '#483fc4',
    color: 'white',
    marginTop: 10,
    justifyContent: 'center',
    height: 35,

  },
});

export default styles;
