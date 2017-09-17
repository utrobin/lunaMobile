import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {Text} from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
    }
});

class Feed extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Feed',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../ic_home_black_24dp_2x.png')}
                style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Feed</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
