export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const LOGIN = 'LOGIN'
export const RECEIVE_CHALLENGE_ID = 'RECEIVE_CHALLENGE_ID'
export const CHALLENGER_PLAYER = 'CHALLENGER_PLAYER'
export const CHALLENGED_PLAYER = 'CHALLENGED_PLAYER'
//export const CHALLENGE_PLAYER = 'CHALLENGE_PLAYER'

export function getPlayers() {
  return {
    type: 'LOAD_PLAYERS',
  }
}

export function receivePlayers(players) {
  return {
    type: RECEIVE_PLAYERS,
    players: players,
  }
}

export function challengeID(resp) {
  return {
    type: RECEIVE_CHALLENGE_ID,
    resp: resp,
  }
}

export function session(username) {
  return {
    type: LOGIN,
    username: username
  }
}

export function activeChallenge(username) {
  return {
    type: 'ACTIVE_CHALLENGE',
    username: username,
  }
}

export function challenge(playerName, username) {
  return {
    type: 'CHALLENGE_PLAYER',
    playerName: playerName,
    username: username,
  }
}

export function joinPlayer(username) {
  return {
    type: 'JOIN_PLAYER',
    playerName: username,
  }
}

export function loadPlayers() {
  return {
    type: 'LOAD_PLAYERS',
  }
}
//
// export function challengedPlayer(challengedPlayer) {
//   debugger
//   return {
//     type: CHALLENGED_PLAYER,
//     challengedPlayer: challengedPlayer,
//   }
// }
