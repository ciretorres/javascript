const API = require('./mock-api');
// To count the matches, call API.countMatches(term) where term is the search term

const EventEmitter = require('events');

module.exports = class Search extends EventEmitter {
    constructor() {
        super()
    }
    searchCount(searchTerm) { }
}