const API = require('./mock-api');
// To count the matches, call API.countMatches(term) where term is the search term

const EventEmitter = require('events');

module.exports = class Search extends EventEmitter {
    constructor() {
        super()
    }
    searchCount(searchTerm) {
        
        if (!searchTerm) {
            this.emit('SEARCH_ERROR', { term: searchTerm, message: new Error('INVALID_TERM').message })
        } else {
            this.emit('SEARCH_STARTED', searchTerm);

            API.countMatches(searchTerm)
            .then(
            // resolve param
            (value) => {
                this.emit('SEARCH_SUCCESS', { term: searchTerm, count: value });
            }, 
            // error param
            (value) => {                
                value = value.message
                this.emit('SEARCH_ERROR', { term: searchTerm, message: value })
            });
        }   
     }
}