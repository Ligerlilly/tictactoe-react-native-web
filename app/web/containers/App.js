import React, { Component } from 'react';
import { connect } from 'react-redux';
import JoinInterface from '../components/JoinInterface'
import ChallengeInterface from '../components/ChallengeInterface'
import ActiveChallengeInterface from './ActiveChallengeInterface'
//import * as actions from '../../actions'
import Lobby from './Lobby'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const username = this.props.session.username
    const challengedPlayer = this.props.challengedPlayer
    const activeChallenge = this.props.activeChallenge
    const visible = this.props.visible.status
    const { dispatch } = this.props.store
    let toShow = ''

    if (!this.props.challengeID.id) {
      debugger
      switch (visible) {
        case 'roster':
        toShow = <Lobby />;
        break;
        case 'join':
        toShow = <JoinInterface/>;
        break;
        case 'challenge':
        toShow = <ChallengeInterface/>;
        break;
        case 'gameboard':
        toShow = <GameBoard/>;
        break;
        default:
        if (username) {
         toShow = <Lobby />
        } else {
         toShow = <JoinInterface dispatch={dispatch}/>;
        }
      }
    } else if (challengedPlayer === username) {
      toShow =  <ActiveChallengeInterface />;
    } else {
      toShow = <ChallengeInterface/>;
    }

    return (
      <div>
      <h2>TicTacToe Lobby</h2>
        {toShow}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
