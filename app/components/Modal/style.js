import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    height: height,
    width: width,
  },
  card: {
    borderRadius: 5,
    maxWidth: '85%',
    maxHeight: '80%',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  closeModal: {
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    paddingBottom: 5,
    flexDirection: 'row-reverse' 
  },
  closeModalIcon: {
    justifyContent: 'flex-end'
  },
  mainBody: {
    marginTop: 10,
    height: '100%'
  }
});

export default styles;