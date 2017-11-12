import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import googleTrends from 'google-trends-api'
import Player from './models/player'
import Query from './models/query'
import { router } from './routes'
import { defaultErrorHandler, corsHandler } from './utilities/handlers'

const app = express();

//  Middleware
app.use('*', corsHandler);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);

let totalPlayers = 0;

app.use(defaultErrorHandler)

app.listen('8081')
console.log('Listening on 8081');

export {
    app
}