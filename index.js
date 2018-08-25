const express = require('express');
const app = express();
const mongoose = require('mongoose');

const messanger = require('./route/messages');
const profile = require('./route/profile');
const logreg = require('./route/log-reg');
const blog = require('./route/blog');
// Database
const User = require('./models/User');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/user');

db.on('error', err => {
  throw err;
});

db.once('open', () => {
  console.log('MongoDB connected');
});

app.get('/', (req, res) => {
  User.find({}, (err, user) => {
    if (err) throw err;
    return res.send(user);
  });
});

app.listen(8080, () => {
  console.log(`The server is running in ${8080} port.`);
});
app.use('/messages', messanger);
app.use('/profile', profile);
app.use('/login', logreg);
app.use('/blog', blog);
