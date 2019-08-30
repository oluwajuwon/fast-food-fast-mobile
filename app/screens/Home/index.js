import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from './style';

export class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    )
  }
}

export default Home;
