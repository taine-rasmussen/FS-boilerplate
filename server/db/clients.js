const connection = require('./connection')

function getAllClients (db = connection) {
  return db('Clients')
    .select()

}

// function getAlbumById (id, db = connection) {
//   return db('albums')
//     .select('*', 'albums.id as id', 'albums.name as name', 'artists.name as artist_name')
//     .join('artists', 'artists.id', 'albums.artist')
//     .where('albums.id', id)
//     .first()
// }

// function addAlbum (album, db = connection) {
//   return db('albums').insert(album)
//     .then(id => {
//       return getAlbumById(id, db)
//     })
// }

// function updateAlbum (id, data, db = connection) {
//   return db('albums')
//     .update(data)
//     .where('id', id)
//     .then(() => {
//       return getAlbumById(id, db)
//     })
// }

// function deleteAlbum (id, db = connection) {
//   return db('albums')
//     .del()
//     .where('id', id)
//     .then(ids => {
//       return ids
//     })
// }

module.exports = {
  getAllClients
}



