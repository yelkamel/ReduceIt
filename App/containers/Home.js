import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { logout } from '../redux/actions/auth';
 
class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    userLogout = () => {
        this.props.onLogout();
    }
     
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    {`Hello: ${this.props.username}`}
                </Text>
                <TouchableOpacity
                    onPress={this.userLogout} 
                    style={styles.button}>
                    <Text style={{color:'white'}}> Logout </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D5D4D1',
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);