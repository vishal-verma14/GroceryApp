import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../mainStyles/color';
import {
  InputField,
  RegistrationButton,
  UploadPhoto,
  Space80,
  Space40,
} from '../../components/index';
import {
  validateEmail,
  checkPassword,
  phoneNumber,
  isRequired,
} from '../../constants/validation';
import {chooseImage, createFormData} from '../Common/common';
import {constants} from '../../constants/index';
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
      phone: {
        text: '',
        message: '',
        isValid: false,
      },
      isRequired: {
        text: '',
        message: '',
        isValid: false,
      },
      value: '',
      imageResponse: '',
    };
    this.validateEmail = validateEmail.bind(this);
    this.checkPassword = checkPassword.bind(this);
    this.phoneNumber = phoneNumber.bind(this);
    this.isRequired = isRequired.bind(this);
    this.chooseImage = chooseImage.bind(this);
    this.createFormData = createFormData.bind(this);
  }

  btnSubmit() {
    if (
      this.state.email.isValid &&
      this.state.password.isValid &&
      this.state.phone.isValid &&
      this.state.isRequired.isValid &&
      !!this.state.imageResponse
    ) {
      this.props.navigation.navigate('Home');
    } else {
      alert('Please fill credentials');
    }
  }

  toggleImage = (maxW, maxH) => {
    let options = {
      title: 'Select Image',
      quality: 1.0,
      maxWidth: maxW,
      maxHeight: maxH,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return null;
      } else if (!!response.error) {
        if (Platform.OS === 'ios') {
          Alert.alert(response.error, '', [
            {
              text: 'OK',
              style: 'cancel',
            },
            {
              text: 'Setting',
              onPress: () => Linking.openURL('app-settings:'),
            },
          ]);
          return null;
        }
      } else {
        this.setState({
          imageResponse: response,
        });
        return response;
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>{constants.SignUpScene}</Text>

          <TouchableOpacity
            onPress={() => {
              this.toggleImage(100, 100);
            }}>
            <UploadPhoto fileUri={this.state.imageResponse.uri} />
          </TouchableOpacity>

          <Space40 />
          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.text}>Name</Text>
            <InputField
              onChangeValue={this.isRequired}
              textColor={colors.dark2}
              borderBottomColor={colors.dark}
              inputType={constants.isRequired}
              errorStyle={styles.error}
              error={this.state.isRequired.message}
            />

            <Text style={styles.text}>Phone</Text>
            <InputField
              onChangeValue={this.phoneNumber}
              textColor={colors.dark2}
              borderBottomColor={colors.dark}
              inputType={constants.phone}
              errorStyle={styles.error}
              error={this.state.phone.message}
            />

            <Text style={styles.text}>Email</Text>
            <InputField
              onChangeValue={this.validateEmail}
              textColor={colors.dark2}
              borderBottomColor={colors.dark}
              inputType={constants.email}
              errorStyle={styles.error}
              error={this.state.email.message}
            />

            <Text style={styles.text}>Password</Text>
            <InputField
              onChangeValue={this.checkPassword}
              textColor={colors.dark2}
              borderBottomColor={colors.dark}
              inputType={constants.password}
              errorStyle={styles.error}
              error={this.state.password.message}
            />

            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => {
                this.btnSubmit();
              }}>
              <RegistrationButton buttonTextProp="Sign Up" />
            </TouchableOpacity>

            <Space80 />

            <Text style={styles.forgetText}>Already Have An Account?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}
              style={styles.signUpButton}>
              <RegistrationButton buttonTextProp="Sign In" />
            </TouchableOpacity>

            <Space80 />
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
