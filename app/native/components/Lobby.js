import React, {
  Component,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux'
import { loadPlayers } from '../../actions'

export default class Lobby extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadPlayers } = this.props
    setInterval(() => console.log('hi'), 1000)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{alignSelf: 'center'}}>{this.props.session.username}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { loadPlayers })(Lobby)
