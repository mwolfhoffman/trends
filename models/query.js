import request from 'request'
import cheerio from 'cheerio'

export default class Query {
    constructor(searches) {
        this.searches = searches;
        this.queryString = '';
    }

    validateSearchTerms() {
        var searches = this.searches

        for (var key in searches) {
            console.log("term ==> ", searches[key]);
            let termArr = searches[key].split(" ");
            console.log(termArr);

            if (termArr.length !== 2) {
                throw new Error(`You're search term must be 2 words. ${key} did not search for 2 words.`)
                return false;
            } else {
                var str = searches[key];
                var term = encodeURI(str);
                this.queryString = this.queryString + ',' + term;

            }
        }
        this.queryString = this.queryString.replace(',', '')
        console.log(this.queryString);
        return true;
    }

    querySearch(cb) {
        let url = 'https://trends.google.com/trends/explore?q=';
        request(url + this.queryString, (err, res, html) => {
            console.log(url+this.queryString);
            if (err) {
                console.log('there was an error');
                return err;
            }
            console.log('NO ERROR YAY');
            return cb(html);
        });
    }
}