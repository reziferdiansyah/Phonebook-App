//app js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql")
const firebase = require('firebase')


const config = {
    apiKey: "AIzaSyBGbhzQvWHCsbay920AWbhBFE1Gcsk4fbs",
    authDomain: "phoneboox-127f6.firebaseapp.com",
    databaseURL: "https://phoneboox-127f6-default-rtdb.firebaseio.com/",
    projectId: "phoneboox-127f6",
    storageBucket: "phoneboox-127f6.appspot.com",
    messagingSenderId: "593150350998"
  };
firebase.initializeApp(config);


var indexRouter = require('./routes/index');
var ApiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/api',ApiRouter);

const phonebookSchema = require('./graphql').phonebookSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: phonebookSchema,
    rootValue: global,
    graphiql: true
}))

module.exports = app;

