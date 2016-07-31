import React, {
  Component,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'
import { joinPlayer } from '../../actions'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.loginHandler = this.loginHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(field) {
    return text => this.setState({ [field]: text })
  }

  loginHandler() {
    return () => {
      this.props.joinPlayer(this.state.username)
      this.props.navigator.replace({id: 'lobby'})
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{flex: .05}}
          placeholder='Enter name'
          ref='username'
          onChangeText={this.changeHandler('username')}
        />
        <View style={{flexDirection: 'row', flex: .1}}>
          <View style={{flex: .3}}></View>
          <View style={{flex: .4}}>
            <TouchableOpacity style={styles.loginContainer} onPress={this.loginHandler()}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: .3}}></View>
        </View>
        <View style={{flex: .95}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#ccc',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { joinPlayer })(Login)
