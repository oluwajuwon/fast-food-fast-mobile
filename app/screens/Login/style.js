import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginView: {
    padding: 20,
    marginTop: 50
  },
  loginHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '50%',
  },
  loginBtn: {
    backgroundColor: '#483fc4',
    color: 'white',
    marginTop: 10,
    justifyContent: 'center',
    height: 100,
  },
  signupLink: {
    marginTop: 10,
  }
});

export default styles;
