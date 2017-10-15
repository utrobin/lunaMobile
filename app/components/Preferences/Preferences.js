import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import imgSettings from '../../assets/img/ic_settings_black_24dp_2x.png';
import styles from './Preferences.styles';

class Preferences extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Preferences',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={imgSettings}
          style={[styles.icon, { tintColor, width: 25, height: 25 }]}
        />
      ),
    };

    render() {
      return (
        <View style={styles.container}>
          <Text>Preferences</Text>
        </View>
      );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Preferences);
