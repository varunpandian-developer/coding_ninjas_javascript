// Define the song data
const songs = [
    { title: "Song 1", genre: "Pop", artist: "Artist 1" },
    { title: "Song 2", genre: "Rock", artist: "Artist 2" },
    { title: "Song 3", genre: "Pop", artist: "Artist 1" },
    { title: "Song 4", genre: "Jazz", artist: "Artist 3" },
];

// Function to filter by genre
function filterByGenre(genre) {
    return function (inputSongs) { // This function accepts an array of songs
        const result = [];
        for (let song of inputSongs) {
            if (song.genre === genre) {
                result.push(song);
            }
        }
        return result;
    };
}

// Function to filter by artist
function filterByArtist(artist) {
    return function (inputSongs) { // This function also accepts an array of songs
        const result = [];
        for (let song of inputSongs) {
            if (song.artist === artist) {
                result.push(song);
            }
        }
        return result;
    };
}

// Function to compose two filter functions
function composeFilters(filter1, filter2) {
    return function (inputSongs) { // This function also accepts an array of songs
        return filter2(filter1(inputSongs)); // Pass songs through both filters
    };
}

// Usage: Create specific filters
const popFilter = filterByGenre("Pop"); // Filter for Pop genre
const artist1Filter = filterByArtist("Artist 1"); // Filter for Artist 1

// Compose the filters
const filterSongs = composeFilters(popFilter, artist1Filter);

// Pass the songs array to the composed filter function
const filteredSongs = filterSongs(songs); // Pass the songs array here

// Output the filtered songs
console.log(filteredSongs);
