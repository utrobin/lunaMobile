import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { Card, CardItem, Left, Icon } from 'native-base';
import {connect} from 'react-redux';
import ImageSlider from 'react-native-image-slider';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  headerInfo: {
    flexDirection: 'column',
    marginLeft: 15,
  },

  headerName: {
    fontSize: 18,
    marginBottom: 5,
  },

  headerAddress: {
    fontSize: 14,
  },

  body: {
    marginTop: 30,
  },
});

class Master extends React.Component {
  static navigationOptions = {
    title: 'Master',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar}
                 source={{uri: 'http://cdn-img.instyle.com/sites/default/files/styles/276x276/public/images/2014/TRANSFORMATIONS/2009b-megan-fox-567_0.jpg?itok=Ex_Uv619'}}/>
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Megan Fox</Text>
            <Text style={styles.headerAddress}>Hollywood, Los Angeles, California</Text>
          </View>
        </View>
        <Body/>
      </View>
    );
  }
}


class Body extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageSlider
          height={200}
          images={[
            'https://i.pinimg.com/736x/59/a3/65/59a365fb1a3d959f7014956becdd4bf0.jpg',
            'https://i.pinimg.com/736x/06/cf/58/06cf5862dac2a181b70e81cd7efa9060--on-my-own-simple-nails.jpg',
            'https://i.pinimg.com/736x/28/81/bc/2881bcfcdfe55bb246b54a9b5ff02741--beautiful-manicure.jpg',
          ]}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Master);
