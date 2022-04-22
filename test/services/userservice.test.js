const userservice = require('./../../app/services/userservice');

describe('Test for UserService', () =>{

  test('1) Create new user using the UserService', () =>{
    const user = userservice.create(100, 'rorrostieta', 'ruben')
    expect(user.username).toBe('rorrostieta')
    expect(user.name).toBe('ruben')
    expect(user.id).toBe(100)
    expect(user.bio).not.toBeUndefined()
  })
})
