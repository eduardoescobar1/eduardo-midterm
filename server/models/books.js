/*File: MidTerm-[301081088],
   Name: Eduardo Escobar,
   StudentId: 301081088
   App: Book-List */ 

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
