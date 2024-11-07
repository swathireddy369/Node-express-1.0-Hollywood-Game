
const PORT = 3000;
const express = require("express");
const fs = require("fs");
const bodyparser = require("body-parser");
const server = express();
server.use(bodyparser.json());
server.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
})

const readMovies = () => {
    const contents = fs.readFileSync("./src/movies.txt", "utf8");
    return contents.split("\n");//arr
}

const allMovies = readMovies()

//randomly choose one movie
let randomIdx = Math.floor(Math.random() * allMovies.length);
let movieToGuess = allMovies[randomIdx]
let set = {};
server.get("/", (req, res) => {
    // res.status(202).send("Hugabuga");
    res.status(200).json({ message: "Success" })
});

const validateInput = (req, res, next) => {
    let { letter } = req.body;
    letter = letter.trim().toLowerCase();
    if (set[letter]) {
        res.status(400).send({ status: "400", error: "letter already used" });
    }
    req.letter = letter
    next();
}
const postFunction = (req, res) => {
    let { letter } = req;
    set[letter] = true;
    res.status(200).send({ status: "200", message: "success" })
}



//post request
server.post('/guess', validateInput, postFunction)

//get

server.get("/guess", (req, res) => {
    let movieSofar = "";
    if (Object.keys(set).length >= 9)
        return res.status(200).send("bihuhuhu you lost")
    for (let i = 0; i < movieToGuess.length; i++) {
        let ch = movieToGuess.charAt(i);
        ch = ch.toLowerCase();
        if (set[ch]) {
            if (i == 0) {
                movieSofar = movieSofar + ch.toUpperCase();
            } else {
                movieSofar = movieSofar + ch;
            }
        } else {
            movieSofar = movieSofar + "_"
        }
        if (movieSofar === movieToGuess) {
            return res.status(200).send("Hurray you guess the movies correctly")
        }
    }
    return res.status(200).json({ movieSofar })
})



