/* eslint-disable max-len,react/no-unescaped-entities */
import React from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './Master.styles';


class Master extends React.Component {
  static navigationOptions = {
    title: 'Master',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <Image style={styles.sign} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/80-google-plus-512.png' }} />

          <Image
            style={styles.avatar}
            source={{ uri: 'http://cdn-img.instyle.com/sites/default/files/styles/276x276/public/images/2014/TRANSFORMATIONS/2009b-megan-fox-567_0.jpg?itok=Ex_Uv619' }}
          />
          <Text style={styles.name}>Megan</Text>

          <View style={styles.statistic_container}>
            <View style={styles.statistic}>
              <Text style={styles.statistic_number}>72</Text>
              <Text style={styles.statistic_caption}>Order</Text>
            </View>

            <View style={styles.statistic}>
              <Text style={styles.statistic_number}>5950</Text>
              <Text style={styles.statistic_caption}>Integral</Text>
            </View>

            <View style={styles.statistic}>
              <Text style={styles.statistic_number}>18</Text>
              <Text style={styles.statistic_caption}>Coupons</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Master);
