const connection = require('./connection')

function getSomeThing (db = connection) {
  return db('placeHolder').select()
}

module.exports = {
  getSomeThing
}
