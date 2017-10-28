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
            if (termArr.length > 2) {
                throw new Error(`You're search term must be 2 words. ${key} did not search for 2 words.`)
            } else {
                var str = searches[key];
                var term = encodeURI(str);
                this.queryString = this.queryString+','+term;
            }
        }
        console.log(this.queryString);
        return true;
    }

    querySearch(cb){
        let url = 'https://trends.google.com/trends/explore?q=';
        request(url+this.queryString, (err,res, html)=>{
            if(err){
                //  TODO: handle error
            return console.log(err)
            }

                console.log(res);
                return cb(html);
        });
    }
}