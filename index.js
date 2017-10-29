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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);



//  TODO: Create global error handler.

app.listen('8081')
console.log('Listening on 8081');
exports = module.exports = app;