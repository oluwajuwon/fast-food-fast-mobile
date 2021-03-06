import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import Button from '../../components/Button';

export class Home extends React.Component {

  orderHistoryNavigate = () => {
    this.props.navigation.navigate('OrderHistory');
  }

  renderModal = () => {
    return(
      <Modal>
        <View>
          <Text>Added to cart</Text>
        </View>
      </Modal>
    );
  }

  renderGridItem = () => {
    const imgUrl = 'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.menuImgContainer}>
            <Image source={{ uri: imgUrl }} style={styles.menuImg} />
          </View>
          <Text style={styles.itemText}>Shawarma and turkey</Text>
          <Text style={styles.itemText}>Price: N5000</Text>
          <Text style={styles.itemText}>Description: yummy and good to the body of the guy and man and all that</Text>
          <Text style={styles.itemText}>Category: meals</Text>
          <Button btnText="Add to Cart" style={styles.addToCartBtn}/>
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.menuImgContainer}>
            <Image source={{ uri: imgUrl }} style={styles.menuImg} />
          </View>
          <Text style={styles.itemText}>Shawarma and turkey</Text>
          <Text style={styles.itemText}>Price: N5000</Text>
          <Text style={styles.itemText}>Description: yummy</Text>
          <Text style={styles.itemText}>Category: meals</Text>
          <Button btnText="Add to Cart" style={styles.addToCartBtn} onBtnClick={this.orderHistoryNavigate}/>
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
const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
