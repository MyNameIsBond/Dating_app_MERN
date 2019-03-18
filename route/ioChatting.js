exports = module.exports = io => {
  io.on('connection', socket => {
    console.log(`socket : ${socket.id}`)

    io.on('newUser', data => {
      console.log(data)
    })

    io.on('SEND_MESSAGE', data => {
      console.log(data)
    })
  })
}
