const express = require('express');
const path = require('./utils/path');
const bodyParser = require('body-parser');
const db = require('./utils/db');
const sequelize = require('./utils/db');
const User = require('./models/user');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

sequelize.sync().then(result =>{
    // console.log(result);
    app.listen(3001);
}).catch(err =>{
    console.log(err);
})