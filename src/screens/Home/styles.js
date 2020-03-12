import {StyleSheet} from 'react-native';
import {RecipeCard} from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,

  categoryTitle: {
    flex: 1,
    fontFamily: 'FallingSky',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#444444',
    margin: 13,
    marginLeft: 15,
  },

  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 290,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontFamily: 'FallingSky',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8,
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
  },
  categoryPanel: {
    width: 375,
    height: 564,
    backgroundColor: 'rgba(251,251,251,0.85)',
    elevation: 3,
    borderRadius: 6,
    borderColor: '#000000',
    borderWidth: 0,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'rgba(0,0,0,3)',
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  headercontainer: {
    width: 350,
    height: 270,
    backgroundColor: 'rgba(251,251,251,0.75)',
    elevation: 3,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 0,
    alignSelf: 'center',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 30,
    padding: 10,
  },
  headerTitle: {
    fontSize: 35,
    flex: 1,
  },
  userContainer: {
    backgroundColor: 'rgba(251,251,251,0.75)',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
  },
  userImage: {
    backgroundColor: '#000',
  },
  userImageContainer: {
    flex: 1,
    paddingTop: 30,
  },
  userImageText: {
    fontSize: 30,
  },
  userImageSuc: {
    fontSize: 15,
  },
});

export default styles;
