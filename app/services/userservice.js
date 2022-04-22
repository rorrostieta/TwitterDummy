const user = require('./../models/user');

class userservice {
  static create(id, username, name) {
    return new user (id, username, name, 'Sin Bio')
  }

  static getInfo(user){
    return [user.id, user.username, user.name, user.bio]
  }
}

module.exports = userservice
