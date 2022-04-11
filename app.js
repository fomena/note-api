
const userRouter= require('./src/routes/userRoute.js');
const noteRouter= require('./src/routes/noteRoute.js');
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard=require('parse-dashboard')
const path = require('path');
const mongoose = require("mongoose");

require('dotenv').config();

// our server Configuration 

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOST = process.env.HOST || 'localhost';
const APP_ID = process.env.APP_ID || 'ACESY-2022';
const DASHBOARD_AUTH = process.env.DASHBOARD_AUTH || 'parse:server';


// secret element of our application
const MASTER_KEY = process.env.MASTER_KEY ;
const DATABASE_URI = process.env.DATABASE_URI ;
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

mongoose.connect( process.env.DATABASE_URI ).then(()=>console.log('database connected!'))

var app = express();
app.use(express.json());
// Configuration of the parse Server
// const parseServerAPI = new ParseServer({
//     databaseURI: DATABASE_URI,
//     cloud: path.resolve(__dirname, 'cloud.js'),
//     appId: APP_ID,
//     masterKey: MASTER_KEY,
//     serverURL: `http://${SERVER_HOST}:${SERVER_PORT}/parse`
// });


// app.use('/parse', parseServerAPI);
app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(SERVER_PORT, () => console.log(
    `Notre serveur tourne en mode ${process.env.NODE_ENV || 'development'} sur http://localhost:${SERVER_PORT}`
));