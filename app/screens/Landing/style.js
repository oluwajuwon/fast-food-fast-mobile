import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    marginTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'teal',
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
  landingHeading: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  orderBtn: {
    color: '#483fc4',
  },
  signUpBtn: {
    backgroundColor: '#483fc4',
  }
});

export default styles;
