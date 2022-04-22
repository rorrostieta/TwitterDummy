const userservice = require('./../../app/services/userservice');

describe('Test for userservice', () =>{

  // Requirement #1 Test
  test('1) Create new user using the userservice', () =>{
    const user = userservice.create(100, 'rorrostieta', 'ruben')
    expect(user.username).toBe('rorrostieta')
    expect(user.name).toBe('ruben')
    expect(user.id).toBe(100)
    expect(user.bio).not.toBeUndefined()
  })

  // Requirement #2 Test
  test('2) Get all user data in a list', () =>{
    const user = userservice.create(100, 'rorrostieta', 'ruben')
    const userInfoList = userservice.getInfo(user)
    expect(userInfoList[0]).toBe(100)
    expect(userInfoList[1]).toBe('rorrostieta')
    expect(userInfoList[2]).toBe('ruben')
    expect(userInfoList[3]).toBe('Sin Bio')
  })

  // Requirement #3 Test
  test('3) Update username', () =>{
    const user = userservice.create(100, 'rorrostieta', 'ruben')
    userservice.updateUserUsername(user, 'ateitsorro')
    expect(user.username).toBe('ateitsorro')
  })

  // Requirement #4 Test
  test('4) Given a list of users give me the list of usernames', () =>{
    const user1 = userservice.create(100, 'rorrostieta1', 'ruben')
    const user2 = userservice.create(100, 'rorrostieta2', 'ruben')
    const user3 = userservice.create(100, 'rorrostieta3', 'ruben')
    const usernames = userservice.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain('rorrostieta1')
    expect(usernames).toContain('rorrostieta2')
    expect(usernames).toContain('rorrostieta3')
  })
})
