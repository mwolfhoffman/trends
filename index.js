//  Libs
import express from 'express';
import fs from 'fs';
import request from 'request';
import cheerio from 'cheerio';
import path from 'path';
import bodyParser from 'body-parser';
import googleTrends from 'google-trends-api'

//  Models
import Player from './models/player'
import Query from './models/query'


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let totalPlayers = 0;

//  TODO: Create global error handler.

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/search/', (req, res) => {
    let searchResult = []
    googleTrends.interestOverTime({ keyword: 'kyle cincinnati' })
        .then(function (results) {
            searchResult.push(results);
        })

    googleTrends.interestOverTime({ keyword: 'boise idaho' })
        .then(function (results) {
            searchResult.push(results);
        })

    googleTrends.interestOverTime({ keyword: 'mountain biking' })
        .then(function (results) {
            searchResult.push(results);

            res.send(formatSearchResults(searchResult));


        }).catch((err) => { console.error(err) })
})

const formatSearchResults = (res) => {
    return res;
};


app.get('/new-players/:count', (req, res) => {
    let players = [];
    let count = req.params.count;
    totalPlayers = count;
    let n = 1;

    if (count > 4) {
        throw new Error("Can only play with a maximum of 4 players!");
    }

    while (count > (n - 1)) {
        let newPlayer = new Player(n);
        console.log(newPlayer);
        players.push(newPlayer);
        n++;
    }
    res.send(players);
});

app.listen('8081')
console.log('Listening on 8081');
exports = module.exports = app;