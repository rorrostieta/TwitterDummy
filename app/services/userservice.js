const user = require('./../models/user');

class userservice {
  static create(id, username, name) {
    return new user (id, username, name, 'Sin Bio')
  }
}

module.exports = userservice
