import React from 'react';
import { Button, View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import styles from './style';

export class Landing extends React.Component {

  render() {
    const landingBg = 'https://github.com/oluwajuwon/Fast-Food-Fast-Frontend/blob/develop/public/images/index-bg.jpg?raw=true';

    return (
      <ImageBackground source={{ uri: landingBg }} style={styles.backgroundImage}>
        <View>
          <StatusBar hidden="true" />
          <Text h1 style={styles.landingHeading}>Welcome to Fast-Food-Fast</Text>
          <Text>
          Your number one food ordering platform.

          FFF is an application where customers can place order for meals daily and get it delivered to them in a Split Second
          </Text>
          <Button title="Order Now" color="#483fc4" />
          <Button title="Sign up Now" color="#483fc4" />
        </View>
      </ImageBackground>
    )
  }
}

export default Landing;
