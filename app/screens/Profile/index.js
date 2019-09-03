import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from './style';
import Button from '../../components/Button';

export class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Text>Full Name</Text>
            <Text>Juwon</Text>
          </View>
          <View>
            <Text>Email</Text>
            <Text>jfagbohungbe@gmail.com</Text>
          </View>
          <View>
            <Text>Username</Text>
            <Text>Juwizy</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button style={styles.actionBtn} btnText="Edit Profile" />
          <Button style={styles.actionBtn} btnText="Change Password" />
        </View>
      </View>
    )
  }
}

export default Profile;
