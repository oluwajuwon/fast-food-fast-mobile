import React from 'react';
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './style';
import Button from '../../components/Button';

export class Signup extends React.Component {

  render() {

    return (
      <ScrollView style={styles.signupView}>
        <Text style={styles.signupHeader}>Create an account</Text>
        <TextInput style={styles.textInput} placeholder="Full name" />
        <TextInput style={styles.textInput} placeholder="Username"/>
        <TextInput style={styles.textInput} placeholder="Email"/>
        <TextInput style={styles.textInput} placeholder="Password"/>
        <TextInput style={styles.textInput} placeholder="Confirm Password"/>
        <Text style={styles.loginLink}>Already have an account?</Text>
        <View style={styles.btnContainer}>
          <Button btnText="Sign up" style={styles.signUpBtn} />
        </View>
      </ScrollView>
    );
  }
}

export default Signup