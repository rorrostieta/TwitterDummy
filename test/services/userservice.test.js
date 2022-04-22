const userservice = require('./../../app/services/userservice');

describe('Test for userservice', () =>{

  test('1) Create new user using the userservice', () =>{
    const user = userservice.create(100, 'rorrostieta', 'ruben')
    expect(user.username).toBe('rorrostieta')
    expect(user.name).toBe('ruben')
    expect(user.id).toBe(100)
    expect(user.bio).not.toBeUndefined()
  })

  test('2) Get all user data in a list', () =>{
    const user = userservice.create(100, 'rorrostieta', 'ruben')
    const userInfoList = userservice.getInfo(user)
    expect(userInfoList[0].toBe(1)
    expect(userInfoList[1].toBe('rorrostieta')
    expect(userInfoList[2].toBe('ruben')
    expect(userInfoList[3].toBe('Sin Bio')
  })
})
