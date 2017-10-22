import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },

  header: {
    backgroundColor: '#4d616e',
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sign: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginTop: 10,
    alignSelf: 'flex-end',
  },

  avatar: {
    marginTop: 5,
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  name: {
    fontSize: 14,
    marginTop: 5,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  statistic_container: {
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35,
    flexDirection: 'row',
  },

  statistic: {
    alignItems: 'center',
    flex: 1,
  },

  statistic_number: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  statistic_caption: {
    color: '#c3c3c3',
    fontSize: 14,
  },

  body: {
    marginTop: 30,
  },
});

export default styles;
