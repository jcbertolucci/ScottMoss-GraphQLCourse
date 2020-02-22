module.exports = {
  Query: {
    user() {
      return {
        name: 'John Doe',
        email: 'john-doe@gmail.com',
        avatar: 'http://myAvatar.com',
        message: 'Hello fellas',
        friends: () => generateRamdomUsers(5)
      }
    },
    users() {
      return generateRamdomUsers(1000000).filter(({ id }) => id > 50)
    }
  }
}