import React from 'react';
import { StyleSheet, Image, FlatList, ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo';
import { Button } from 'native-base';
import { getPeopleFinish } from '../../modules/people/people.actions';
import { pushLoading, popLoading } from '../../modules/loading/loading.actions';
import { pushRefreshing, popRefreshing } from '../../modules/refreshing/refreshing.actions';
import ListItem from './ListItem';
import imgHome from '../../assets/img/ic_home_black_24dp_2x.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
});

class Feed extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Feed',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={imgHome}
          style={[styles.icon, { tintColor, width: 25, height: 25 }]}
        />
      ),
    };

    componentDidMount() {
      this.props.pushLoading();
      this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
      const seed = Math.floor(Math.random() * (300));
      const url = `https://randomuser.me/api/?seed=${seed}&page=1&results=20`;

      // eslint-disable-next-line
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          this.props.getPeopleFinish(res.results);
          this.props.popLoading();
          this.props.popRefreshing();
        });
    };

    handleRefresh = () => {
      this.props.pushRefreshing();
      this.makeRemoteRequest();
    };

    render() {
      const { loading, people, refreshing } = this.props;

      const {address, loadingm } = this.props.data;

      console.log(this.props.data, 555);

      if (loading.value) {
        return (
          <ActivityIndicator animating size="large" style={styles.container} />
        );
      }

      return (
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <ListItem item={item} />
          )}
          keyExtractor={item => item.login.username} // Unique field for each element
          refreshing={refreshing.value}
          onRefresh={this.handleRefresh}
        />
      );
    }
}

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return {
    pushLoading() {
      dispatch(pushLoading);
    },
    popLoading() {
      dispatch(popLoading);
    },

    pushRefreshing() {
      dispatch(pushRefreshing);
    },
    popRefreshing() {
      dispatch(popRefreshing);
    },

    getPeopleFinish(data) {
      dispatch(getPeopleFinish(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(gql`
     {address(id:1){id,lat,lon}}
  `)(Feed)
);
