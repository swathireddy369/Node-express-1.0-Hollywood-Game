# Movie Guessing Project

This project is a movie guessing game API built using Node.js and Express. The server randomly selects a movie from a list of movie titles, and users attempt to guess the title by submitting one letter at a time. Users win by guessing all letters correctly within a limited number of tries.

## Features

- **Express.js**: Framework for building the API.
- **File System (fs)**: Used to read a list of movies from a text file (`movies.txt`).
- **Game Logic**:
  - Randomly selects a movie title from a list.
  - Tracks guessed letters and provides feedback on correct or incorrect guesses.
  - Limits the user to a maximum number of incorrect guesses before ending the game.

## Project Structure

- **Main Server File**: Contains all game logic and API endpoint handlers.
- **Movie List**: `movies.txt` file in the `src` directory, containing a list of movie titles, each on a new line.

## Setup

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed.
2. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd movie-guessing-project
