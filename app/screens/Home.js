import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>We have no friends!</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
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
  }
});

export default Home;
