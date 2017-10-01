import React from 'react';
import { StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import { getPeopleFinish } from '../../modules/people/people.actions';
import { pushLoading, popLoading } from '../../modules/loading/loading.actions';
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
      const url = 'https://randomuser.me/api/?seed=1&page=1&results=20';

      // eslint-disable-next-line
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          this.props.getPeopleFinish(res.results);
          this.props.popLoading();
        });
    };

    render() {
      if (this.props.loading.value) {
        return (
          <ActivityIndicator animating size="large" style={styles.container} />
        );
      }

      return (
        <List>
          <FlatList
            data={this.props.people}
            renderItem={({ item }) => (
              <Image
                style={{ width: 350, height: 350, alignItems: 'center' }}
                source={{ uri: item.picture.large }}
              />
            )}
            keyExtractor={item => item.login.username} // Unique field for each element
          />
        </List>
      );
    }
}

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return {
    pushLoading() { dispatch(pushLoading); },
    popLoading() { dispatch(popLoading); },

    getPeopleFinish(data) {
      dispatch(getPeopleFinish(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
