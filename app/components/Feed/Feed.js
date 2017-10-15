import React from 'react';
import { Image, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo';
import { getPeopleFinish } from '../../modules/people/people.actions';
import { pushRefreshing, popRefreshing } from '../../modules/refreshing/refreshing.actions';
import ListItem from '../ListItem/ListItem';
import imgHome from '../../assets/img/ic_home_black_24dp_2x.png';
import styles from './Feed.styles';

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
      this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
      const seed = Math.floor(Math.random() * (300));
      const url = `https://randomuser.me/api/?seed=${seed}&page=1&results=20`;

      // eslint-disable-next-line
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          console.log(res.results);
          this.props.getPeopleFinish(res.results);
          this.props.popRefreshing();
        });
    };

    handleRefresh = () => {
      this.props.pushRefreshing();
      this.makeRemoteRequest();
    };

    renderItem = ({ item }) => <ListItem item={item} />

    render() {
      const { people, refreshing } = this.props;

      const { address, loading } = this.props.data;

      console.log(address);

      if (loading) {
        return (
          <ActivityIndicator animating size="large" style={styles.container} />
        );
      }

      return (
        <FlatList
          data={people}
          renderItem={this.renderItem}
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
  `)(Feed),
);
