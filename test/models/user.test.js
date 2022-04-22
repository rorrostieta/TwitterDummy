const user = require('./../../app/models/user')

describe('Unit test for Twitter User', () =>{
  test('1. User object creation test', () =>{

    // Definimos codigo de la app
    const User = new user(100, 'rorrostieta', 'ruben', 'Bio', 'dateCreated', 'lastUpdate')

    // Validacion de resultados de codigo
    // Valores esperados verificando codigo de app vs expectativas
    expect(User.id).toBe(100)
    expect(User.username).toBe('rorrostieta')
    expect(User.name).toBe('ruben')
    expect(User.bio).toBe('Bio')
    expect(User.dateCreated).toBe('dateCreated')
    expect(User.lastUpdate).toBe('lastUpdate')
  });
})
