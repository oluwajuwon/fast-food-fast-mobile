import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import styles from './style';

const Button = ({ btnText, style }) => {

  return (
    <TouchableOpacity style={{ ...styles.btn,...style }}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  )

}

export default Button