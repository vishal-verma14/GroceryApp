import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginTop: 70,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
  },

  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
    marginBottom: 40,
  },
  text: {
    color: colors.white,
    fontSize: 13,
    marginTop: 20,
  },
  forgetText: {
    color: colors.white,
    fontSize: 13,
    marginTop: 20,
    marginBottom: 12,
    textAlign: 'center',
  },
  signInButton: {
    marginTop: 15,
  },
  signUpButton: {
    marginTop: 20,
  },
});
