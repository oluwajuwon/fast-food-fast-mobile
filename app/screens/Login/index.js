import React from 'react';
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './style';
import Button from '../../components/Button';

export class Login extends React.Component {

  signupNavigate = () => {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <ScrollView style={styles.loginView}>
        <Text style={styles.loginHeader}>Login to your account</Text>
        <TextInput style={styles.textInput} placeholder="Email"/>
        <TextInput style={styles.textInput} placeholder="Password"/>
        <Text style={styles.signupLink}>Forgot password</Text>
        <Text style={styles.signupLink} onPress={this.signupNavigate}>Don't have an account? Signup</Text>
        <View style={styles.btnContainer}>
          <Button btnText="Login" style={styles.loginBtn} />
        </View>
      </ScrollView>
    );
  }
}

export default Login