import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Card, Left, Icon } from 'native-base';
import { defaultFontSize } from '../../assets/Constants';
import ImageSlider from './ImageSlider';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header_info: {
    marginLeft: 5,
  },
  header_name: {
    fontSize: defaultFontSize,
    fontWeight: 'bold',
  },
  header_location: {
    fontSize: defaultFontSize,
  },
  options: {
    flex: 0.1,
    width: 20,
  },
  icons_bar: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  sign: {
    width: 26,
    height: 26,
    marginLeft: 15,
    borderRadius: 13,
  },
  main_image: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    height: 15,
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#bdbdbd',
    opacity: 0.9,
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#000000',
  },
});

// eslint-disable-next-line
/*eslint no-console: ["error", { allow: ["log"] }] */
class ListItem extends React.Component {
  onOptionsClicked = () => {
    Alert.alert(
      'Title',
      'Choose any option',
      [
        { text: 'Option #1', onPress: () => console.log('Option #1 pressed') },
        { text: 'Option #2', onPress: () => console.log('Option #2 pressed') },
        { text: 'Option #3', onPress: () => console.log('Option #3 pressed') },
      ],
    );
  };

  onLikesClicked = () => {
    console.log('Likes clicked!');
  };

  onSaveClicked = () => {
    console.log('Save clicked!');
  };

  render() {
    const { item } = this.props;

    return (
      <Card>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg' }}
          />
          <Left style={styles.header_info}>
            <Text style={styles.header_name}>Салон Jasmine. Мастер Евгения.</Text>
            <Text style={styles.header_location}>Рядом с метро Курская</Text>
          </Left>
          <TouchableHighlight onPress={this.onOptionsClicked}>
            <Icon style={styles.options} name="list" />
          </TouchableHighlight>
        </View>


        <View style={styles.icons_bar}>
          <Image style={styles.sign} source={{ uri: 'https://image.freepik.com/free-icon/share-circle_318-28815.jpg' }} />
          <Image style={styles.sign} source={{ uri: 'https://image.freepik.com/free-icon/phone-symbol-of-an-auricular-inside-a-circle_318-50305.jpg' }} />
          <Image style={styles.sign} source={{ uri: 'https://s-media-cache-ak0.pinimg.com/originals/79/d0/01/79d0013e6709267f89a1389e604cb051.png' }} />
          <Image style={styles.sign} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png' }} />
          <Image style={styles.sign} source={{ uri: 'http://www.iconsdb.com/icons/preview/black/vk-xxl.png' }} />
        </View>


        <ImageSlider
          height={250}
          images={[
            'https://i.pinimg.com/736x/8f/56/77/8f56773001b9590da809282d7bfa0cbe--classy-nails-pretty-nails.jpg',
            'https://i.pinimg.com/736x/06/cf/58/06cf5862dac2a181b70e81cd7efa9060--on-my-own-simple-nails.jpg',
            'https://i.pinimg.com/736x/28/81/bc/2881bcfcdfe55bb246b54a9b5ff02741--beautiful-manicure.jpg',
          ]}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListItem);
