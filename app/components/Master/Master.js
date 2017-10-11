/* eslint-disable max-len,react/no-unescaped-entities */
import React from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './Master.styles';


class Master extends React.Component {
  static navigationOptions = {
    title: 'Master',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: 'http://cdn-img.instyle.com/sites/default/files/styles/276x276/public/images/2014/TRANSFORMATIONS/2009b-megan-fox-567_0.jpg?itok=Ex_Uv619' }}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Megan Fox</Text>
            <Text style={styles.headerAddress}>Hollywood, Los Angeles, California</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text>Megan Denise Fox (born May 16, 1986) is an American actress and model. She began her acting career in 2001,
            with several minor television and film roles, and played a regular role on the Hope & Faith television sitcom.
            In 2004, she made her film debut with a role in the teen comedy Confessions of a Teenage Drama Queen.
            In 2007, she co-starred as Mikaela Banes, the love interest of Shia LaBeouf's character, in the blockbuster
            action film Transformers, which became her breakout role. Fox reprised her role in the 2009 sequel, Transformers:
            Revenge of the Fallen. Later in 2009, she starred as the eponymous lead in the black comedy horror film Jennifer's Body.</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Master);
