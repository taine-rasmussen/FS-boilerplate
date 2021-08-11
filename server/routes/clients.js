const express = require('express')

const db = require('../db/clients')

const router = express.Router()


router.get('/', (req, res) => {
  return db.getAllClients()
    .then(allClients => {
      console.log(allClients)
      return res.json(allClients)
    })
    .catch(err => {
      return res.status(500).json({ error: err.message })
    })
})


router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getClient(id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router



// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   return db.getAlbumById(id)
//     .then(album => {
//       return res.json(album)
//     })
//     .catch(err => {
//       return res.status(500).json({ error: err.message })
//     })
// })
