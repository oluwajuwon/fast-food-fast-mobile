import React from 'react';
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './style';

const Modal = ({ showModal, style, children, closeModal }) => {

  return ( showModal &&
    <View style={styles.mainBackground}>
      <View style={styles.card}>
        <View style={styles.closeModal}>
          <Icon style={styles.closeModalIcon} name="times" size={20} color="#483fc4" onPress={closeModal} />
        </View>
        <View style={styles.mainBody}>
          {children}
        </View>
      </View>
    </View>
  )
}

export default Modal;
