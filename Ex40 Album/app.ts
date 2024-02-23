type Album = {
    artistName: string,
    albumTitle: string,
    numOfTracks?: number
};

let musicAlbums: Album[] = [];

function make_album(name: string, title: string, tracks?: number) {
    let i = musicAlbums.length;
    musicAlbums[i] = {
        artistName: name,
        albumTitle: title,
        numOfTracks: tracks
    };
}

make_album("Artist1", "Album1")
make_album("Artist2", "Album2")
make_album("Artist3", "Album3")
make_album("Artist4", "Album4", 3)
make_album("Artist5", "Album5", 5)

musicAlbums.forEach(album => {
    console.log(`\n` + JSON.stringify(album, null, 1));
});