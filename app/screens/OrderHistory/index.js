import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import styles from './style';
import Button from '../../components/Button';

export class OrderHistory extends React.Component {

  renderGridItem = () => {
    const imgUrl = 'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.menuImgContainer}>
            <Image source={{ uri: imgUrl }} style={styles.menuImg} />
          </View>
          <Text style={styles.itemText}>Order Date: Tue Sep 03 2019</Text>
          <Text style={styles.itemText}>Items: view Items</Text>
          <Text style={styles.itemText}>Amount Paid: N2000</Text>
          <Text style={styles.itemText}>Status: New</Text>
          <Button btnText="Delete Order" style={styles.deleteOrderBtn} />
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.menuImgContainer}>
            <Image source={{ uri: imgUrl }} style={styles.menuImg} />
          </View>
          <Text style={styles.itemText}>Order Date: Tue Sep 03 2019</Text>
          <Text style={styles.itemText}>Items: view Items</Text>
          <Text style={styles.itemText}>Amount Paid: N2000</Text>
          <Text style={styles.itemText}>Status: New</Text>
          <Button btnText="Delete Order" style={styles.deleteOrderBtn} />
        </View>

      </View>
    );
  }

  keyExtractor = (item, index) => item.id;

  render() {
    const data = [{ name: 'cheese', price: '300', description: 'new', id: '1' }]
    return (
      <ScrollView>
      <FlatList
        data={data}
        renderItem={this.renderGridItem}
        keyExtractor={this.keyExtractor}
      />
      </ScrollView>
    )
  }
}

export default OrderHistory;
