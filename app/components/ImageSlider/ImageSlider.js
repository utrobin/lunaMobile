import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Icon, Button } from 'native-base';


const reactNativePackage = require('react-native/package.json');

const splitVersion = reactNativePackage.version.split('.');
const majorVersion = +splitVersion[0];
const minorVersion = +splitVersion[1];
let key = 0;
let key1 = -1;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222',
  },
  buttons: {
    height: 15,
    marginTop: 15,
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//
export default class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      height: Dimensions.get('window').width * (4 / 9),
      width: Dimensions.get('window').width,
      scrolling: false,
    };
  }

  componentWillMount() {
    const release = (e, gestureState) => {
      const width = this.state.width;
      const relativeDistance = gestureState.dx / width;
      const vx = gestureState.vx;
      let change = 0;

      if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
        change = 1;
      } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
        change = -1;
      }
      const position = this.getPosition();
      if (position === 0 && change === -1) {
        change = 0;
      } else if (position + change >= this.props.images.length) {
        change = (this.props.images.length) - (position + change);
      }
      this.move(position + change);
      return true;
    };

    this.panResponder = PanResponder.create({
      onPanResponderRelease: release,
    });

    this.interval = setInterval(() => {
      const newWidth = Dimensions.get('window').width;
      if (newWidth !== this.state.width) {
        this.setState({ width: newWidth });
      }
    }, 16);
  }


  componentDidUpdate(prevProps) {
    if (prevProps.position !== this.props.position) {
      this.move(this.props.position);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRef(ref) {
    this.ref = ref;
    if (ref && this.state.position !== this.getPosition()) {
      this.move(this.getPosition());
    }
  }

  getPosition() {
    if (typeof this.props.position === 'number') {
      return this.props.position;
    }
    return this.state.position;
  }

  move(index) {
    const isUpdating = index !== this.getPosition();
    const x = this.state.width * index;
    if (majorVersion === 0 && minorVersion <= 19) {
      this.ref.scrollTo(0, x, true); // use old syntax
    } else {
      this.ref.scrollTo({ x: this.state.width * index, y: 0, animated: true });
    }
    this.setState({ position: index });
    if (isUpdating && this.props.onPositionChanged) {
      this.props.onPositionChanged(index);
    }
  }

  render() {
    const width = this.state.width;
    const height = this.props.height || this.state.height;
    const position = this.getPosition();
    return (<View>
      <ScrollView
        ref={ref => this.onRef(ref)}
        decelerationRate={0.99}
        horizontal
        showsHorizontalScrollIndicator={false}
        {...this.panResponder.panHandlers}
        style={[styles.container, this.props.style, { height }]}
      >
        {
          this.props.images.map((image, index) => {
            const imageObject = typeof image === 'string' ? { uri: image } : image;

            const imageComponent = (
              <Image
                key={key}
                source={imageObject}
                style={{ height, width }}
              />
            );
            key += 1;

            if (this.props.onPress) {
              return (
                <TouchableOpacity
                  style={{ height, width }}
                  onPress={() => this.props.onPress({ image, index })}
                  delayPressIn={200}
                >
                  {imageComponent}
                </TouchableOpacity>
              );
            }
            return imageComponent;
          })}
      </ScrollView>

      <View style={styles.footer}>
        <Button transparent style={styles.likes} onPress={() => console.log('Rate')}>
          <Icon active name="star" />
          <Text>4.8</Text>
        </Button>

        <View style={styles.buttons}>
          {
            this.props.images.map((image, index) => {
              key1 -= 1;

              return (
                <View
                  key={key1}
                  underlayColor="#ccc"
                  style={[styles.button, position === index && styles.buttonSelected]}
                >
                  <View />
                </View>
              );
            })
          }
        </View>

        <Button transparent style={styles.likes} onPress={() => console.log('Save')}>
          <Icon active name="book" />
        </Button>

      </View>
    </View>);
  }
}
