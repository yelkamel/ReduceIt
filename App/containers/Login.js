import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import { login } from '../redux/actions/auth';
 
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            route: 'Login',
            username: '',
            password: ''
        };
    }
 
    userLogin = () => {
        if (this.state.username.length > 3 && this.state.password.length > 3)
            this.props.onLogin(this.state.username, this.state.password);
    }
 
    toggleRoute = () => {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
    }
 
    render () {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true}
                    style={styles.textInput}
                    maxLength={20}
                    keyboardType='email-address'
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <TextInput 
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    maxLength={20}
                    caretHidden={true}
                    style={styles.textInput}
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={styles.buttonView}>
                    <TouchableOpacity  style={styles.button} onPress={this.userLogin}>
                        <Text style={{color: 'white'}}>{this.state.route}</Text>
                    </TouchableOpacity>
                <Text style={{fontSize: 20, color: 'blue'}} onPress={ this.toggleRoute}>
                    {alt}
                </Text>
                </View>
            </View>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        onSignUp: (username, password) => { dispatch(signup(username, password)); }
    }
}

const styles = StyleSheet.create({
    textInput:{
        width: 200,
        height: 40,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D5D4D1',
    },
    buttonView:{
        height: 300, 
        alignItems: 'center', 
        justifyContent: 'space-between',
        margin: 10,
    },
    button:{
        height: 50,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius: 10,
        backgroundColor: '#29231F'
    },
    instructions: {
      textAlign: 'center',
      color: '#000',
      fontSize: 23,
      marginBottom: 5,
    },
  });
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);