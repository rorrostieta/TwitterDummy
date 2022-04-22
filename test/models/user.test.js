const user = require('./../../app/models/user')

describe('Unit test for Twitter User', () =>{
  test('1. User object creation test', () =>{

    // Definimos codigo de la app
    const User = new user(100, 'rorrostieta', 'ruben', 'Bio')

    // Validacion de resultados de codigo
    // Valores esperados verificando codigo de app vs expectativas
    expect(User.id).toBe(100)
    expect(User.username).toBe('rorrostieta')
    expect(User.name).toBe('ruben')
    expect(User.bio).toBe('Bio')
    expect(User.dateCreated).not.toBeUndefined()
    expect(User.lastUpdate).not.toBeUndefined()
  })
  test('2. Adding getters', () =>{
    const User = new user(100, 'rorrostieta', 'ruben', 'Bio')

    expect(User.getUsername).toBe('rorrostieta')
    expect(User.getBio).toBe('Bio')
    expect(User.getDateCreated).not.toBeUndefined()
    expect(User.getLastUpdated).not.toBeUndefined()
  });
})
