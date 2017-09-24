import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Left, Right, Body, Icon } from 'native-base';

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
  },
  main_image: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
  likes: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dots: {
    flex: 0.5,
    textAlign: 'center',
  },
  save: {
    flex: 0.25,
    textAlign: 'right',
  },
});

// eslint-disable-next-line
class ListItem extends React.Component {
  render() {
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
          <Right style={styles.options}>
            <Icon name="list" />
          </Right>
        </CardItem>
        <CardItem>
          <Image
            style={styles.main_image}
            source={{ uri: 'https://github.com/ppsreejith.png?size=200' }}
          />
        </CardItem>

        <CardItem>
          <View style={styles.likes}>
            <Icon name="ios-heart" />
            <Text>1.99k</Text>
          </View>

          <Text style={styles.dots}>Точечки</Text>

          <Icon name="book" style={styles.save} />
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListItem);
