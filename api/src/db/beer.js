const nanoid = require('nanoid')

const createBeerModel = db => {
  return {
    findMany(filter) {
      return db.get('beer')
        .filter(filter)
        .value()
    },
    findOne(filter) {
      return db.get('beer')
        .find(filter)
        .value()
    },
    create(beer) {
      const newbeer = { id: nanoid(), createdAt: new Date().getTime(), ...beer }

      db.get('beer')
        .push(newbeer)
    },
    update(beer) {
      db.get('beer')
        .find({ id: beer.id })
        .assign(beer)
        .write()
    },
    delete(beer) {
      db.get('beer')
        .remove({ id: beer.id })
        .write()
    }
  }
}

module.exports = {
  createBeerModel
}