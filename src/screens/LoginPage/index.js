import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {colors} from '../../mainStyles/color';
import {constants} from '../../constants/index';
import {validateEmail, checkPassword} from '../../constants/validation';

import {InputField, RegistrationButton} from '../../components/index';

const {height} = Dimensions.get('screen');

const logoSquare = height * 0.7 * 0.4;

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        text: '',
        message: '',
        isValid: false,
      },
      password: {
        text: '',
        message: '',
        isValid: false,
      },
      value: '',
    };
    this.validateEmail = validateEmail.bind(this);
    this.checkPassword = checkPassword.bind(this);
  }

  btnSubmit() {
    if (this.state.email.isValid && this.state.password.isValid) {
      this.props.navigation.navigate('Home');
    } else {
      alert('Please fill credentials');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>{constants.login}</Text>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.text}>{constants.email}</Text>
            <InputField
              value={this.state.email.text}
              onChangeValue={this.validateEmail}
              textColor={colors.dark2}
              borderBottomColor={colors.dark}
              inputType={constants.email}
              errorStyle={styles.error}
              error={this.state.email.message}
            />
            <Text style={styles.text}>{constants.password}</Text>
            <InputField
              value={this.state.password.value}
              onChangeValue={this.checkPassword}
              textColor={colors.dark}
              borderBottomColor={colors.dark2}
              inputType={constants.password}
              errorStyle={styles.error}
              error={this.state.password.message}
            />
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => {
                this.btnSubmit();
              }}>
              <RegistrationButton buttonTextProp={constants.login} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ForgetPassword');
              }}
              style={styles.signUpButton}>
              <Text style={styles.forgetText}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}
              style={styles.signUpButton}>
              <RegistrationButton buttonTextProp="Sign Up" />
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 70,
    flex: 1,
    flexDirection: 'column',
  },

  loginHeader: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
    marginBottom: 40,
  },

  forgetText: {
    color: colors.dark,
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
  error: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: colors.errorColor,
  },
  container: {
    flex: 1,
    backgroundColor: '#05373a',
  },

  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: logoSquare,
    height: logoSquare,
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
});
