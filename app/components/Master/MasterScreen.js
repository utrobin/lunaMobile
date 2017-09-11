import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerText: {
        marginLeft: 15,
        fontSize: 20,
    },

    avatar: {
        width: 100,
        height: 100
    },

    body: {
        marginTop: 40,
    }
});

class MasterScreen extends React.Component {
    static navigationOptions = {
        title: 'Ivanov Ivan',
    };

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Body/>
            </View>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.avatar}
                       source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png'}}/>
                <Text style={styles.headerText}>This is a short description</Text>
            </View>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <Text>Te conocí un día de abril, un día común,
                    el día que menos lo esperaba.
                    Yo no pensaba en el amor, ni lo creía
                    y mucho menos lo buscaba.

                    Y de pronto apareciste tú,
                    destrozando paredes e ideas te volviste mi luz.

                    Yo no sabía que con un beso
                    se podría parar el tiempo y lo aprendí de ti…</Text>
            </View>
        );
    }
}


const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterScreen);
