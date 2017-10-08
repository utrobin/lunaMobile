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
    backgroundColor: '#ededed',
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
    // const { item } = this.props;
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
          <Image style={styles.sign} source={{ uri: 'https://i.pinimg.com/736x/4f/e6/53/4fe6534f93c825f24a58ff2ec6defd58--brand-icon-famous-logos.jpg' }} />
          <Image style={styles.sign} source={{ uri: 'data:image/jpeg;base64,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' }} />
          <Image style={styles.sign} source={{ uri: 'https://i.pinimg.com/236x/0a/c8/ea/0ac8ea7535b9d835af6ce4b5eb9b578e.jpg' }} />
          <Image style={styles.sign} source={{ uri: 'http://listamaze.com/wp-content/uploads/2015/05/bmw-logo.png' }} />
          <Image style={styles.sign} source={{ uri: 'http://2pix.org/photo/2014/07/Skoda-logo.jpg' }} />
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
