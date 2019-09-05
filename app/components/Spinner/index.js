import React from 'react';
import { Text, View, Image } from 'react-native'
import styles from './style';

const Spinner = ({ showSpinner }) => {

  return ( showSpinner &&
    <View style={styles.mainBackground}>
      <View style={styles.card}>
        <View style={styles.mainBody}>
          <Image 
              source={require('../../../assets/spinner.gif')}
              style={styles.spinner}
          />
        </View>
      </View>
    </View>
  )
}

export default Spinner;
