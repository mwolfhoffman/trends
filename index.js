//  Libs
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import googleTrends from 'google-trends-api'

//  Models
import Player from './models/player'
import Query from './models/query'

//  Routes
import { router } from './routes'

//  Middleware
const app = express();
// Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);

let totalPlayers = 0;

//  TODO: Create global error handler.
app.listen('8081')
console.log('Listening on 8081');
exports = module.exports = app;
