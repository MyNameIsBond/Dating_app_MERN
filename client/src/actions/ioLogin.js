import { USER_LOGGEDIN } from './types'
import socketIOClient from 'socket.io-client'
const url = 'http://localhost:8080'
const socket = socketIOClient(url)

export const loggedIn_reducer = () => (dispatch, props) => {
  // socket.on('say to someone', (id, msg) => {
  //   socket.broadcast.to(id).emit('my message', msg)
  // })
  socket.on('connection', socket => {
    console.log('hey from sockets')
  })
  const user = {
    username: 'Tony',
    userID: 'k12lj3h12k3j1h23l'
  }
  dispatch({ type: USER_LOGGEDIN, payload: user })
  socket.emit('hello', { loser: 'Tony' })
  console.log('pfff')
}
