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
    width: 26,
    height: 26,
    flex: 'right',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  name: {
    fontSize: 18,
    marginTop: 10,
    color: '#ffffff',
  },

  body: {
    marginTop: 30,
  },
});

export default styles;
