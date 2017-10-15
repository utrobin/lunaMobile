import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import imgMap from '../../assets/img/ic_map_black_24dp_2x.png';
import styles from './Map.styles';

class Map extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Map',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={imgMap}
          style={[styles.icon, { tintColor, width: 25, height: 25 }]}
        />
      ),
    };

    render() {
      return (
        <View style={styles.container}>
          <Text>Map</Text>
        </View>
      );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Map);
