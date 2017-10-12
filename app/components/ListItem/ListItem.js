/* eslint-disable max-len,react/prefer-stateless-function */
import React from 'react';
import { Text, View, Image, Modal, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, Left, Icon } from 'native-base';
import ImageSlider from '../ImageSlider/ImageSlider';
import styles from './ListItem.styles';
import { openItemModal, closeItemModal } from '../../modules/modal/modal.actions';

// eslint-disable-next-line
/*eslint no-console: ["error", { allow: ["log"] }] */
class ListItem extends React.Component {
  render() {
    const { modal } = this.props;
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => this.props.navigateMasterScreen()}>
            <View style={styles.header}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg' }}
              />
              <Left style={styles.header_info} >
                <Text style={styles.header_name}>Салон Jasmine. Мастер Евгения.</Text>
                <Text style={styles.header_location}>Рядом с метро Курская</Text>
              </Left>
              <TouchableOpacity onPress={() => this.props.openItemOptions()}>
                <Icon style={styles.options} name="list" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>


          <View style={styles.icons_bar}>
            <Image style={styles.sign} source={{ uri: 'https://image.freepik.com/free-icon/share-circle_318-28815.jpg' }} />
            <Image style={styles.sign} source={{ uri: 'https://image.freepik.com/free-icon/phone-symbol-of-an-auricular-inside-a-circle_318-50305.jpg' }} />
            <Image style={styles.sign} source={{ uri: 'https://s-media-cache-ak0.pinimg.com/originals/79/d0/01/79d0013e6709267f89a1389e604cb051.png' }} />
            <Image style={styles.sign} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png' }} />
            <Image style={styles.sign} source={{ uri: 'http://www.iconsdb.com/icons/preview/black/vk-xxl.png' }} />
          </View>


          <ImageSlider
            height={250}
            images={[
              'https://i.pinimg.com/736x/8f/56/77/8f56773001b9590da809282d7bfa0cbe--classy-nails-pretty-nails.jpg',
              'https://i.pinimg.com/736x/06/cf/58/06cf5862dac2a181b70e81cd7efa9060--on-my-own-simple-nails.jpg',
              'https://i.pinimg.com/736x/28/81/bc/2881bcfcdfe55bb246b54a9b5ff02741--beautiful-manicure.jpg',
            ]}
          />
        </Card>


        <Modal
          transparent
          visible={modal.value}
        >
          <TouchableWithoutFeedback style={styles.modalContainer} onPress={() => this.props.closeItemOptions()}>
            <View style={styles.modalContainer}>
              <View style={styles.modalDialog}>

                <TouchableHighlight underlayColor="#E6E6E6" onPress={() => this.props.closeItemOptions()}>
                  <View style={styles.modalItem}>
                    <Text style={styles.modalText}>Пожаловаться...</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="#E6E6E6" onPress={() => this.props.closeItemOptions()}>
                  <View style={styles.modalItem}>
                    <Text style={styles.modalText}>Скопировать ссылку</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="#E6E6E6" onPress={() => this.props.closeItemOptions()}>
                  <View style={styles.modalItem}>
                    <Text style={styles.modalText}>Включить уведомления о публикацих</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}


const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return {
    navigateMasterScreen() {
      dispatch({ type: 'Master' });
    },
    openItemOptions() {
      dispatch(openItemModal);
    },
    closeItemOptions() {
      dispatch(closeItemModal);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

