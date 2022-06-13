import React from 'react';
import { StyleSheet, Dimensions, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class SignUpComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isValidUserName: false,
      isValidPhoneNumber: false,
      isValidEmail: false,
      email: '',
      password: '',
      secureTextEntry: true
    }
  }

  

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <ImageBackground style={styles.background}
            source={require("../../assets/SignUp_background.png")}>
          </ImageBackground>
        </View> */}

        <Animatable.View style={styles.footer}
          animation="fadeInUpBig">
          <Text style={styles.titleText}> Sign Up </Text>

          <View style={[styles.action, { marginTop: 40 }]}>
            <FontAwesome
              name="user-o"
              color="blue"
              size={20}
            />
            <TextInput
              placeholder="User Name"
              style={styles.textInput}
              onChangeText={(text_userName) => this.checkNameValidation(text_userName)}
            />
            {this.state.isValidUserName ?
              <Animatable.View
                animation="bounceIn" >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
          </View>

          <View style={[styles.action, { marginTop: 20 }]}>
            <AntDesign
              name="phone"
              color="blue"
              size={20}
            />
            <TextInput
              keyboardType='numeric'
              placeholder="Phone Number"
              style={styles.textInput}
              onChangeText={(text_phoneNumber) => this.checkPhoneValidation(text_phoneNumber)}
            />
            {this.state.isValidPhoneNumber ?
              <Animatable.View
                animation="bounceIn" >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
          </View>

          <View style={[styles.action, { marginTop: 20 }]}>
            <Feather
              name="mail"
              color="blue"
              size={20}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChangeText={(text) => this.checkEmailValidation(text)}
            />
            {this.state.isValidEmail ?
              <Animatable.View
                animation="bounceIn"
              >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
          </View>

          <View style={[styles.action, { marginTop: 20 }]}>
            <FontAwesome
              name="lock"
              color="blue"
              size={20}
            />
            {this.state.secureTextEntry ?
              <TextInput
                placeholder="Password (must be > 5 characters)"
                secureTextEntry={true}
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password: text
                })}
              />
              :
              <TextInput
                placeholder="Password (must be > 5 characters)"
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password: text
                })}
              />}
            <Animatable.View
              animation="bounceIn" >
              <TouchableOpacity
                onPress={() => this.makeSecurePassword()}>
                {this.state.secureTextEntry ?
                  <Feather
                    name="eye-off"
                    color="gray"
                    size={18}
                  />
                  :
                  <Feather
                    name="eye"
                    color="gray"
                    size={18}
                  />
                }
              </TouchableOpacity>
            </Animatable.View>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.button_signUp}
              onPress={() => {
                this.checkPasswordValidation(this.state.password)
            
                this.state.isValidUserName && this.state.isValidPhoneNumber &&
                this.state.isValidEmail && this.state.password.length > 5 ?
                this.signUpUser(this.state.email, this.state.password)
                :
                alert("Check your details again !"); 
              }
              }>
              <Text style={styles.btnTextSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </Animatable.View>
      </View>
    );
  }
}



const image_width = Dimensions.get('window').width;
const image_height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  background: {
    flex: 1,
    width: image_width,
    height: image_height / 2.9
  },
  titleText: {
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'blue'
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  button_signUp: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: image_width - 50,
    height: 50
  },
  btnTextSignUp: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }
});