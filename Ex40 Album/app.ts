type Album = {
    artistName: string,
    albumTitle: string,
    numOfTracks?: number
};

let musicAlbums: Album[] = [];

const make_album = (name: string, title: string, tracks?:number ): Album => ({artistName: name, albumTitle: title, numOfTracks: tracks});

musicAlbums[musicAlbums.length] = make_album("Artist1", "Album1");
musicAlbums[musicAlbums.length] = make_album("Artist2", "Album2")
musicAlbums[musicAlbums.length] = make_album("Artist3", "Album3")
musicAlbums[musicAlbums.length] = make_album("Artist4", "Album4", 3)
musicAlbums[musicAlbums.length] = make_album("Artist5", "Album5", 5)

musicAlbums.forEach(album => {
    console.log(`\n` + JSON.stringify(album, null, 1));
});