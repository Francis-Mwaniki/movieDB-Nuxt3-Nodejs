const express =require('express');
const dotenv = require('dotenv');
dotenv.config();
const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb(process.env.API_KEY)
//init express
const app = express();
// Port
const port = process.env.PORT || 3000;

//create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//search for a movies
app.get('/search/:query', (req, res) => {
    moviedb.searchMovie({ query: req.params.query })
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error);
    })
}
);
//search a person
app.get('/person/:query', (req, res) => {
    moviedb.searchPerson({ query: req.params.query })
    .then(response => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    })
    });
//search with movie keyword
app.get('/keyword/:query', (req, res) => {
    moviedb.searchKeyword({ query: req.params.query })
    .then(response => {
        res.send(response);
    }).catch((error) => {
        console.log(error);
    })
});

//listen on port 3000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
}
);