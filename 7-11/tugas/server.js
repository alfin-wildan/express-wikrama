const express = require('express');
const cors = require('cors');
const movies = require('./data.js');

const app = express();
const port = 3000;

app.use(cors());

async function getFilteredMovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredMovies = movies.filter(movie => movie.year = 1994);
            resolve(filteredMovies);
        }, 5000);
    });
}

app.get('/', async (req, res) => {
    try {
        const filteredMovies = await getFilteredMovies();
        res.json(filteredMovies);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port}`);
});