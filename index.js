import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors'
import googleTrends from 'google-trends-api'
import Player from './models/player'
import Query from './models/query'
import { router } from './routes'
import { defaultErrorHandler, corsHandler } from './utilities/handlers'

export const app = express();
const port = process.env.PORT || 8081;

//  Middleware
app.use('*', cors(corsHandler));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(router);

let totalPlayers = 0;

app.use(defaultErrorHandler)

app.listen(port, () => {
    console.log('Listening on 8081');
})
