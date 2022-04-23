// Requirement #1
const user = require('./../models/user');
const userservice = require('./../services/userservice');

class userview{
  static createUser(payload){
    if (payload === null){
      return {error: 'payload no existe'}
    }
  }
}

module.exports = userview
