import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {categories} from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import {getNumberOfRecipes} from '../../data/MockDataAPI';
import {ListItem, SearchBar} from 'react-native-elements';

//Home
export default class Index extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerLeft: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: (
        <SearchBar
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            width: 200,
          }}
          inputContainerStyle={{
            backgroundColor: '#EDEDED',
          }}
          inputStyle={{
            backgroundColor: '#EDEDED',
            borderRadius: 10,
            color: 'black',
          }}
          searchIcond
          clearIcon
          round
          onChangeText={text => params.handleSearch(text)}
          placeholder="Search"
          value={params.data}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', {category, title});
  };

  renderCategory = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressCategory(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  renderAdd = ({item}) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{uri: item.photo_url}} />
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ImageBackground
        source={require('../../../assets/icons/phoneBackground.png')}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.headercontainer}>
            <Text style={styles.headerTitle}>
              "I am curious about food and hope you are too"
            </Text>
            <View style={styles.userContainer}>
              <Image source={require('../../../assets/icons/backArrow.png')} />
              <View>
                <Text style={styles.userImageText}>Vishal Verma</Text>
                <Text style={styles.userImageSuc}>2,00,000</Text>
              </View>
            </View>
          </View>
          <Text style={styles.categoryTitle}>CATEGORIES</Text>
          <View style={styles.categoryPanel}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={categories}
              renderItem={this.renderCategory}
              keyExtractor={item => `${item.recipeId}`}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
