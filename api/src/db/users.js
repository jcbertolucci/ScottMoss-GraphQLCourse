const userBase = (id) => {
  const name = `Friend ${id}`
  return {
    id,
    name,
    email: `user${id}gmail.com`,
    avatar: `https://myavatar-user${id}.com`,
    message: `Hello from ${name}`
  }  
}

const generateRamdomUsers = (qty = 1) => {
  return Array(qty)
    .fill()
    .map((_, index) => userBase(index + 1))
}

module.exports.generateRamdomUsers = generateRamdomUsers