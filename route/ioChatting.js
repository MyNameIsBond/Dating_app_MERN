const UsersOnline = require('../models/UsersOnline')

exports = module.exports = io => {
  io.on('connection', socket => {
    socket.on('connection', async data => {
      try {
        const user = await UsersOnline.find({ socketID: data.socketID, userID: data.userID })
        console.log('user')
        console.log(user)
        if (user === null) {
          console.log('new user')
          var onlineUser = new UsersOnline()
          onlineUser.username = data.username
          onlineUser.userID = data.userID
          onlineUser.socketID = data.socketID
          onlineUser.save()
          socket.emit('connection', data)
        } else {
          return
        }
      } catch (error) {
        if (error.name === 'MongoError' && error.code === 11000) {
          throw error
        }
      }
    })

    socket.on('SEND_MESSAGE', data => {
      console.log(data)
    })
    socket.on('disconnect', async data => {
      console.log(`${data.id} disconnected`)
      const user = await UsersOnline.findOne({ socketID: data.id })
      if (user) {
        console.log(`${user.username} disconnected`)
      } else {
      }
    })
  })
}
