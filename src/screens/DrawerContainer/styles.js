import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    alignContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  profileText: {
    color: '#121212',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default styles;
