import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  menuImgContainer: {
    borderRadius: 5,
    height: 150,
    width: 150,
    backgroundColor: '#cccccc'
  },
  deleteOrderBtn: {
    backgroundColor: '#ca2c1c',
    color: 'white',
    marginTop: 10,
    height: 40,
  },
  itemContainer: {
    width: '45%',
  },
  itemText: {
    width: '100%'
  }
});

export default styles;
