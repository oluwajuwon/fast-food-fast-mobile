import React from 'react';
import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import styles from './style';
import Button from '../../components/Button';

export class Landing extends React.Component {

  signupNavigate = () => {
    this.props.navigation.navigate('Signup');
  }

  loginNavigate = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    const landingBg = 'https://github.com/oluwajuwon/Fast-Food-Fast-Frontend/blob/develop/public/images/index-bg.jpg?raw=true';

    return (
      <ImageBackground source={{ uri: landingBg }} style={styles.backgroundImage}>
        <View>
          <StatusBar hidden="true" />
          <View style={styles.mainContent}>
            <Text h1 style={styles.landingHeading}>Welcome to {"\n"} Fast-Food-Fast</Text>
            <Text style={styles.landingText}>
              Your number one food ordering platform.
              {"\n"}
              FFF is an application where customers can place order for meals daily and get it delivered to them in a Split Second
            </Text>

            <View style={styles.btnContainer}>
              <Button btnText="Order Now" style={styles.orderBtn} onBtnClick={this.loginNavigate}/>
              <Button btnText="Sign up Now" style={styles.signUpBtn} onBtnClick={this.signupNavigate}/>
            </View>
          </View>
          
        </View>
      </ImageBackground>
    )
  }
}

export default Landing;
