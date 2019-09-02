import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    marginTop: 0,
  },
  mainContent: {
    marginTop: 150,
    padding: 15,
  },
  landingHeading: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  landingText: {
    color: 'white'
  },
  orderBtn: {
    backgroundColor: '#483fc4',
    color: 'white',
    height: 100,
    // width: 150,
  },
  signUpBtn: {
    backgroundColor: '#0dd160',
    color: 'white',
    height: 100,
    // width: 150,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '50%',
  },
});

export default styles;
