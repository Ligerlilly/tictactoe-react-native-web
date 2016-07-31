import React, { Component, View, Text } from 'react-native';
import { connect }  from 'react-redux/native';

// dumb components
import Login from '../components/Login';
// actions
import * as actions from '../../actions';

/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const { dispatch } = this.props;

    return (
      <View style={{flex: 1}}>
        <Text style={{ flex: .1, fontSize: 20, alignSelf: 'center'}}>TicTacToe Lobby</Text>
        <Login style={{flex: .9}} />
      </View>
    );
  }
}

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
