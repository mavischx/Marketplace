const express = require('express');
const path = require('./utils/path');
const bodyParser = require('body-parser');
const db = require('./utils/db');
const sequelize = require('./utils/db');
const session = require('express-session');
const cors = require('cors');
const User = require('./models/user');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      secret: 'your-secret-key', // Replace with your secret key
      resave: false,
      saveUninitialized: false,
    })
  );

app.use(
    cors({
    origin: ['http://localhost:3000'], // Replace with your frontend's origin(s)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // This allows cookies and other credentials to be sent with the request
  }));

app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

sequelize.sync().then(result =>{
    // console.log(result);
    app.listen(3001);
}).catch(err =>{
    console.log(err);
})