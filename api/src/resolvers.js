const fetch = require('node-fetch');

module.exports = {
  Query: {
    users(_, argsFromClient, ctx, info) {
      return ctx.models.User.findMany()
    },
    user(_, argsFromClient, ctx, info) {
      console.log(ctx.models.User.findOne({ id: argsFromClient.id}))
      return ctx.models.User.findOne({ id: argsFromClient.id})
    },
    beers(_, {input}, ctx, info) {
      console.log('input', {...input})
      return ctx.models.Beer.findMany({...input})
    },

  },

  /* Mutation: {

  }, */

  User: {
    avatar(user, argsFromClient, ctx, info) {
      return fetch('https://picsum.photos/200')
              .then(res => res.url)
    }
  }
}