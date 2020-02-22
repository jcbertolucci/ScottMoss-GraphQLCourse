const nanoid = require('nanoid')

const createUserModel = db => {
  return {
    findMany(filter) {
      return db.get('user')
        .filter(filter)
        .value()
    },
    findOne(filter) {
      return db.get('user')
        .find(filter)
        .value()
    },
    create(user) {
      const newUser = { id: nanoid(), createdAt: new Date().getTime(), ...user }

      db.get('user')
        .push(newUser)
    },
    update(user) {
      db.get('user')
        .find({ id: user.id })
        .assign(user)
        .write()
    },
    delete(user) {
      db.get('user')
        .remove({ id: user.id })
        .write()
    }
  }
}

module.exports = {
  createUserModel
}