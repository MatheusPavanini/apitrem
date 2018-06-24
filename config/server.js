//#region Imports
const app = require('express')();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const consign = require('consign')();
const cors = require('cors');
const express = require('express');

//#endregion

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    headers: ['Content-Type', 'Authorization', 'token']
}));

app.use('/static', express.static('uploads'));


consign.include('config/dbConnection.js')
.then('app/controllers')
.then('app/routes')
.into(app);

module.exports = app;
