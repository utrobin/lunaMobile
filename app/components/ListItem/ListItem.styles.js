import { StyleSheet } from 'react-native';
import { defaultFontSize } from '../../assets/Constants';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header_info: {
    marginLeft: 5,
  },
  header_name: {
    fontSize: defaultFontSize,
    fontWeight: 'bold',
  },
  header_location: {
    fontSize: defaultFontSize,
  },
  options: {
    flex: 0.1,
    width: 20,
  },
  icons_bar: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  sign: {
    width: 26,
    height: 26,
    marginLeft: 15,
    borderRadius: 13,
  },
  main_image: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    height: 15,
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#bdbdbd',
    opacity: 0.9,
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#000000',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalDialog: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  modalItem: {
    height: 50,
    justifyContent: 'center',
  },
  modalText: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default styles;
