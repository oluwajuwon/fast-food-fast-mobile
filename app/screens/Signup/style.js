import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginTop: 0,
  },
  signupView: {
    padding: 20,
    marginTop: 50
  },
  signupHeader: {
    fontSize: 30,
    fontWeight: 'bold',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  signUpBtn: {
    backgroundColor: '#0080FF',
    color: 'white',
    marginTop: 20,
    alignItems: 'center',
    height: 40,
    width: '100%',
  },
  loginLink: {
    marginTop: 15,
  }
});

export default styles;
