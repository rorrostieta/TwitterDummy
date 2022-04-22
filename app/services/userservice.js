// Requirement #1
const user = require('./../models/user');

class userservice {
  static create(id, username, name) {
    return new user (id, username, name, 'Sin Bio')
  }

  // Requirement #2
  static getInfo(user){
    return [user.id, user.username, user.name, user.bio]
  }

  // Requirement #3
  static updateUserUsername(user, newUsername){
    return user.username = newUsername
  }
}

module.exports = userservice
