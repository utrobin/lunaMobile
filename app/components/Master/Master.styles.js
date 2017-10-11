import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  headerInfo: {
    flexDirection: 'column',
    marginLeft: 15,
  },

  headerName: {
    fontSize: 18,
    marginBottom: 5,
  },

  headerAddress: {
    fontSize: 14,
  },

  body: {
    marginTop: 30,
  },
});

export default styles;
