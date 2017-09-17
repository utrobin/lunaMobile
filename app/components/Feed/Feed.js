import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {Text, FlatList, ActivityIndicator} from "react-native";
import {List} from "react-native-elements";

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

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator animating size="large" style={styles.container}/>
            )
        }
        else {
            return (
                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => (
                            <Image style={{width: 350, height: 350, alignItems: 'center'}}
                                   source={{uri: 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png?RenditionID=-1'}}/>
                        )}
                        keyExtractor={item => item.email}
                    />
                </List>
            );
        }
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const {page, seed} = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({loading: true});
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({error, loading: false});
            });
    };
}

const mapStateToProps = (state) => state;

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
