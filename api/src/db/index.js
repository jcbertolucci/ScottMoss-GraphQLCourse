const low = require ('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const createUserModel = require('./user')
const createBeerModel = require('./beer')

module.exports = {
  models: {
    User: createUserModel(db),
    Beer: createBeerModel(db),
  },
  db
}