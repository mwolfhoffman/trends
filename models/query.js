export default class Query {
    constructor(searches) {
        this.searches = searches;
    }

    validateSearchTerms() {
        var searches = this.searches

        for (var key in searches) {
            console.log("term ==> ", searches[key]);
            let termArr = searches[key].split(" ");
            console.log(termArr);
            if (termArr.length > 2) {
                throw new Error(`You're search term must be 2 words. ${key} did not search for 2 words.`)
            }
        }
        return true;
    }

}