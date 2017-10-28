//  Libs
import express from 'express';
import fs from 'fs';
import request from 'request';
import cheerio from 'cheerio';
import path from 'path';


const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen('8081')
console.log('Listening on 8081');
exports = module.exports = app;