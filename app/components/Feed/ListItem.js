import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Left, Body, Icon } from 'native-base';

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
  likes_container: {
    flex: 0.25,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dots: {
    flex: 0.5,
    textAlign: 'center',
  },
  save_container: {
    flex: 0.25,
    alignItems: 'flex-end',
  },
});

// eslint-disable-next-line
/*eslint no-console: ["error", { allow: ["log"] }] */
class ListItem extends React.Component {
  onOptionsClicked = () => {
    console.log('Options clicked!');
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
          <Image
            style={styles.main_image}
            source={{ uri: item.picture.large }}
          />
        </CardItem>

        <CardItem>
          <TouchableHighlight style={styles.likes_container} onPress={this.onLikesClicked}>
            <View style={styles.likes}>
              <Icon name="ios-heart" />
              <Text>1.99k</Text>
            </View>
          </TouchableHighlight>

          <Text style={styles.dots}>Точечки</Text>

          <TouchableHighlight style={styles.save_container} onPress={this.onSaveClicked}>
            <Icon name="book" />
          </TouchableHighlight>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListItem);
