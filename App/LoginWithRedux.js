import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'


// ACTION
const TYPE_USERNAME = 'TYPE_USERNAME';
const typeUsername = (text) => ({
    type: TYPE_USERNAME,
    text
})

const LoginFormTextInput = connect((state) => ({
    value: state.username
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typeUsername(text));
    }
}))(TextInput)


export default class LoginWithRedux extends Component {

    constructor(props){
        super (props)
        this.state = {
            username: '',
            password: '',
            pendingLoginRequest: false
        }

        // REDUCER
        this.store = createStore((state, action) => {
            console.log(JSON.stringify(action))
            return {...state, username: action.text}
        }, this.state);
    }

    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.container}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Password'/>
                    <LoginFormTextInput 
                        style={styles.textInput}
                        placeholder='Username'/>
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={()=> {}}>
                        <Text style={styles.instructions}>
                            let's reduce It 
                        </Text>
                    </TouchableHighlight>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D5D4D1',
    },
    textInput: {
      height: 60,
      width: 200,
      margin: 10,
    },
    button:{
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        borderRadius: 10,
        backgroundColor: '#29231F'
    },
    instructions: {
      textAlign: 'center',
      color: '#FDCD58',
      marginBottom: 5,
    },
  });