import googleTrends from 'google-trends-api'


export default class Query {
    constructor(searches) {
        this.searches = searches;
        this.queryString = '';
    }

    validateSearchTerms() {
        var searches = this.searches
        for (var key in searches) {
            let termArr = searches[key].split(" ");
            if (termArr.length !== 2) {
                throw new Error(`You're search term must be 2 words. ${key} did not search for 2 words.`)
                return false;
            }
        }
        return true;
    }

    runQuery(terms) {
        var start = new Date(Date.now() - (86400000 * 365));
        return new Promise((resolve, reject) => {
            googleTrends.interestOverTime({ keyword: terms, startTime: start })
                .then((data) => {
                    return resolve(data);
                }).catch((err) => { return reject(err) })
        })
    }
}