import { USER_LOGGEDIN } from './types'
import socketIOClient from 'socket.io-client'
const socket = socketIOClient(url)
const url = 'http://localhost:8080'

export const usersonline = () => (props, dispatch) => {
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
  socket.emit('hello', { loser: 'Tony' })
  dispatch(setOnline(user))
  console.log('pfff')
}

const setOnline = user => {
  return {
    type: USER_LOGGEDIN,
    payload: user.username
  }
}
