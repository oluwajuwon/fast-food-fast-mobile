import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  deleteAllButton: {
    marginRight: 40
  },
  menuImgContainer: {
    borderRadius: 5,
    height: 150,
    width: 150,
    backgroundColor: '#cccccc'
  },
  addToCartBtn: {
    backgroundColor: '#483fc4',
    color: 'white',
    marginTop: 10,
    height: 40,
  }
});

export default styles;