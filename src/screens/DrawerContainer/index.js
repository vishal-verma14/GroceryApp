import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class Index extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/icons/user-img.png')}
            resizeMode="contain"
            style={styles.profileImage}></Image>

          <Text style={styles.profileText}>Vishal Verma</Text>
        </View>

        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Store');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATEGORIES"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="ORDER HISTORY"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="HELP"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="ABOUT"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SIGN OUT"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

Index.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
