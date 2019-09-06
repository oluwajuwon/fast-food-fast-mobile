import React from 'react';
import { View, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import styles from './style';
import Button from '../../components/Button';

export class Login extends React.Component {

  signupNavigate = () => {
    this.props.navigation.navigate('Signup');
  }

  homeNavigate = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <ImageBackground source={require('../../../assets/background.jpg')} style={styles.backgroundImage}>
        <ScrollView style={styles.loginView}>
          <Text style={styles.loginHeader}>Welcome back</Text>
          <TextInput style={styles.textInput} placeholder="Email"/>
          <TextInput style={styles.textInput} placeholder="Password"/>
          <Text style={styles.signupLink}>Forgot password</Text>
          <View style={styles.btnContainer}>
            <Button btnText="Login" style={styles.loginBtn} onBtnClick={this.homeNavigate} />
          </View>
          <Text style={styles.signupLink} onPress={this.signupNavigate}>Don't have an account? Signup</Text>
        </ScrollView>
      </ImageBackground>
      
    );
  }
}

export default Login