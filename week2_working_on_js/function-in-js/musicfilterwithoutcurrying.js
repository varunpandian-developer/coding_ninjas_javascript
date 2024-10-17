// 1. Define the filter functions separately
function filterByGenre(songs, genre) {
    const result = [];
    for (let song of songs) {
        if (song.genre === genre) {
            result.push(song);
        }
    }
    return result;
}

function filterByArtist(songs, artist) {
    const result = [];
    for (let song of songs) {
        if (song.artist === artist) {
            result.push(song);
        }
    }
    return result;
}

// 2. Use the functions step by step
const songs = [
    { title: "Song 1", genre: "Pop", artist: "Artist 1" },
    { title: "Song 2", genre: "Rock", artist: "Artist 2" },
    { title: "Song 3", genre: "Pop", artist: "Artist 1" },
    { title: "Song 4", genre: "Pop", artist: "Artist 2" }
];

// First, filter by genre
const popSongs = filterByGenre(songs, "Pop");

// Then, filter the result by artist
const artist1PopSongs = filterByArtist(popSongs, "Artist 1");

// Output the final filtered list
console.log(artist1PopSongs);  // [{ title: "Song 1", genre: "Pop", artist: "Artist 1" }, { title: "Song 3", genre: "Pop", artist: "Artist 1" }]
