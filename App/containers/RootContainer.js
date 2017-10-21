import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';
 
class RootContainer extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Home />;
        } else {
            return <Login />;
        }
    }
}
 
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(RootContainer);