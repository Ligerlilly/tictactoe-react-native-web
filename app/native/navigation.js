import React, { Component } from 'react'
import { Navigator, Text, TouchableHighlight } from 'react-native'

import Login from './components/Login'
import Lobby from './components/Lobby'

class Navigation extends React.Component {
    renderScene(route, navigator) {
      switch (route.id) {
        case 'login':
          return <Login navigator={navigator} {...route.props} />
        case 'lobby':
          return <Lobby navigator={navigator} />
      }
    }

    render() {
      return (
        <Navigator
          initialRoute={{ id: 'login' }}
          renderScene={this.renderScene}
        />
      )
    }
}

export default Navigation
