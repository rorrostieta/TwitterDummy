// Requirement #1
const user = require('./../models/user');
const userservice = require('./../services/userservice');

class userview{
  static createUser(payload){
    if (payload === null){
      console.log('Error en payload')
      return {error: 'Error - El payload no existe'}
    }

    // Requirement #2 & 3
    else if (typeof payload.username != 'string' || typeof payload.name != 'string' || typeof payload.id != 'number') {
      console.log('Error en attributos')
      return {error: 'Los attributos necesitan tener un valor valido'}
    }
    else {
      console.log('Everything ok')
      return {name:payload.name, username:payload.username, id:payload.id}
    } {

    }
  }
}

module.exports = userview
