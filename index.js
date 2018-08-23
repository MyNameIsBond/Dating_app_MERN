const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log('Hello!')
})


app.listen(8080, () => {
    console.log(`The server is running in ${8080} port.`)
})