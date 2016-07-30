import React, {
  Component,
  View,
  TextInput
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{flex: 1}}
        />
      </View>
    );
  }
}
