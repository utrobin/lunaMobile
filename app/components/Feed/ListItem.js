import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Left, Right, Body, Icon } from 'native-base';

// eslint-disable-next-line
class ListItem extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left style={{ flex: 0.8 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{ uri: 'https://goo.gl/EzYtKK' }}
            />
            <Body>
              <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Салон Jasmine. Мастер
                            Евгения.</Text>
              <Text note style={{ fontSize: 13 }}>Рядом с метро Курская</Text>
            </Body>
          </Left>
          <Right style={{ flex: 0.2 }}>
            <Icon name="list" />
          </Right>
        </CardItem>
        <CardItem>
          <Image
            style={{ width: 350, height: 300, alignItems: 'center' }}
            source={{ uri: 'https://github.com/ppsreejith.png?size=200' }}
          />
        </CardItem>

        <CardItem style={{ flex: 1, justifyContent: 'space-between' }}>

          <View style={{ flex: 0.25, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="ios-heart" />
            <Text>1.99k</Text>
          </View>

          <Text style={{ flex: 0.5, textAlign: 'center' }}>Точечки</Text>

          <Icon name="book" style={{ flex: 0.25, textAlign: 'right' }} />

        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ListItem);
