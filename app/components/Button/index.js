import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import styles from './style';

const Button = ({ btnText, style, onBtnClick }) => {

  return (
    <TouchableOpacity style={{ ...styles.btn,...style }} onPress={onBtnClick} >
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  )

}

export default Button