import React, {
  Component,
  View,
  Text,
  ListView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
import { loadPlayers } from '../../actions'

export default class Lobby extends Component {
  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    const { loadPlayers } = this.props
    loadPlayers()
  }

  renderRow(player) {
    const { username } = this.props.session
    const playerName = player.playerName
    const canChallenge = username !== playerName
    return (
      <View>
        <Text>{playerName}</Text>
        {canChallenge && <TouchableOpacity style={{backgroundColor: '#ccc', marginBottom: 10}}><Text>challenge</Text></TouchableOpacity>}
      </View>
    )
  }

  render() {
    let dataSource = null
    if (this.props.players.length > 0) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.playerName !== r2.playerName})
      dataSource = ds.cloneWithRows(this.props.players)
    }

    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {dataSource ? <ListView  dataSource={dataSource} renderRow={this.renderRow} /> : null}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { loadPlayers })(Lobby)
