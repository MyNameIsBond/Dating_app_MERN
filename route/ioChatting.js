exports = module.exports = io => {
  io.on('connection', socket => {
    console.log('son')
  })

  io.on('SEND_MESSAGE', data => {
    console.log(data)
  })
}
