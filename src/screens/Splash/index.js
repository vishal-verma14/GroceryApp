import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(function() {
      props.navigation.navigate('Login');
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={require('../../../assets/icons/cookie100.png')}
        />
      </View>
    );
  }
}
