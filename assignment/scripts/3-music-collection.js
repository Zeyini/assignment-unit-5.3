console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// Create an empty array named myCollection
let myCollection = [];

// Function to add an album to the collection
function addToCollection(collection, title, artist, yearPublished) {
    // Create a new album object
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    
    // Add the new album to the collection
    collection.push(newAlbum);
    // Return the newly created object
    return newAlbum;
}

// Log the return value / Add albums to the collection
console.log(addToCollection(myCollection, "Album 1", "Artist A", 2001));
console.log(addToCollection(myCollection, "Album 3", "Artist B", 2003));
console.log(addToCollection(myCollection, "Album 3", "Artist A", 2015));
console.log(addToCollection(myCollection, "Album 4", "Artist C", 2005));
console.log(addToCollection(myCollection, "Album 5", "Artist B", 2020));
console.log(addToCollection(myCollection, "Album 6", "Artist A", 2012));
console.log(addToCollection(myCollection, "Album 6", "Artist A", 2012));
// log myCollection
console.log(myCollection);





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
