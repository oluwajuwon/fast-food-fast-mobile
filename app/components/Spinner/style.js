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
    maxWidth: '25%',
    maxHeight: '25%',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  spinner: {
    width: 70,
    height: 70,
  }
});

export default styles;