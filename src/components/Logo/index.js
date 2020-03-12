import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {signUpImage} from '../../mainStyles/image';
export default class index extends Component {
  render() {
    return (
      <Animatable.Image
        animation="bounceIn"
        style={styles.logoStyle}
        source={signUpImage.source}
        resizeMode={'stretch'}
      />
    );
  }
}

const styles = StyleSheet.create({
  logoStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});
