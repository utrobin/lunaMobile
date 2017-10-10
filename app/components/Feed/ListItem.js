import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Left, Body, Icon } from 'native-base';
import ImageSlider from 'react-native-image-slider';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header_name: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  header_location: {
    fontSize: 13,
  },
  options: {
    flex: 0.1,
    width: 20,
  },
  main_image: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
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
        <CardItem>
          <Left>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://goo.gl/EzYtKK' }}
            />
            <Body>
              <Text style={styles.header_name}>Салон Jasmine. Мастер Евгения.</Text>
              <Text style={styles.header_location}>Рядом с метро Курская</Text>
            </Body>
          </Left>
          <TouchableHighlight onPress={this.onOptionsClicked}>
            <Icon style={styles.options} name="list" />
          </TouchableHighlight>
        </CardItem>
        <CardItem>
          <ImageSlider
            height={250}
            images={[
              'https://i.pinimg.com/736x/8f/56/77/8f56773001b9590da809282d7bfa0cbe--classy-nails-pretty-nails.jpg',
              'https://i.pinimg.com/736x/06/cf/58/06cf5862dac2a181b70e81cd7efa9060--on-my-own-simple-nails.jpg',
              'https://i.pinimg.com/736x/28/81/bc/2881bcfcdfe55bb246b54a9b5ff02741--beautiful-manicure.jpg',
            ]}
          />
        </CardItem>

        <CardItem style={styles.footer}>
          <TouchableHighlight onPress={this.onLikesClicked}>
            <View style={styles.likes}>
              <Icon name="ios-heart" />
              <Text>1.99k</Text>
            </View>
          </TouchableHighlight>


          <TouchableHighlight onPress={this.onSaveClicked}>
            <Icon name="book" />
          </TouchableHighlight>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListItem);
