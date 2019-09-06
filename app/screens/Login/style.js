import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginTop: 0,
  },
  loginView: {
    padding: 20,
    marginTop: 100,
  },
  loginHeader: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginTop: 10,
    padding: 10
  },
  btnContainer: {
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  loginBtn: {
    backgroundColor: '#0080FF',
    color: 'white',
    marginTop: 20,
    alignItems: 'center',
    height: 40,
    width: '100%',
  },
  signupLink: {
    marginTop: 15,
  }
});

export default styles;
