//  Libs
import express from 'express';
import fs from 'fs';
import request from 'request';
import cheerio from 'cheerio';
import path from 'path';

//  Models
import Player from './models/player'

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/new-players/:count', (req, res) => {
    console.log('hittin here');
    let players = [];
    let count = req.params.count;
    console.log(count);
    let n = 1;

    if(count>4){
        throw new Error("Can only play with a maximum of 4 players!");
    }

    while (count > (n-1)) {
        console.log("creating player "+ n);
        let newPlayer = new Player(n);
        console.log(newPlayer);
        players.push(newPlayer);
        n++;
    }

    console.log("pushing out that array, get ready yall");
    res.send(players);
});

app.listen('8081')
console.log('Listening on 8081');
exports = module.exports = app;