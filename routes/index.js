import express from 'express';
import path from 'path';
import googleTrends from 'google-trends-api'

//  Models
import Player from '../models/player'
import Query from '../models/query'

export const router = express();

let totalPlayers;

router.get('/', function (req, res) {
    res.send('trends game coming soon');
});

router.post('/search/', (req, res) => {
    let searchResult;
    let currentResult;
    let q = new Query(req.body.searches);
    let searchesValidated = q.validateSearchTerms();

    if (searchesValidated) {
        var arr = [];
        for (var key in q.searches) {
            arr.push(q.searches[key]);
        }

        q.runQuery(arr)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => { console.log(error) });
    }
})

const formatSearchResults = (res) => {
    return res;
};


router.get('/new-players/:count', (req, res) => {
    let players = [];
    let count = req.params.count;
    totalPlayers = count;
    let n = 1;

    if (count > 4) {
        throw new Error("Can only play with a maximum of 4 players!");
    }

    if (count < 2) {
        throw new Error("You need at least 2 players to play this game.");
    }

    while (count > (n - 1)) {
        let newPlayer = new Player(n);
        players.push(newPlayer);
        n++;
    }
    res.send(players);
});



