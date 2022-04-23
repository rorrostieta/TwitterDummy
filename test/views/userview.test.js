const userview = require('./../../app/views/userview');

describe('Tests for userview', () => {

  // Requirement 1
  test("Return an error object when try to create a new user with a null payload", () => {
    const payload = null
    const result = userview.createUser(payload)
    // https://jestjs.io/docs/using-matchers#strings
    expect(result.error).toMatch(/payload no existe/)
  });

  // Requirement 2
  test("Return an object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: null, name: 12, id: 'id'}
    const result = userview.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor valido/)
  });

  // Requirement 3
  test("Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {username: 'Username'}
    const result = userview.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor valido/)
  });
});
