const userview = require('./../../app/views/userview');

describe('Tests for userview', () => {

  // Requirement 1
  test("Return an error object when try to create a new user with a null payload", () => {
    const payload = null
    const result = userview.createUser(payload)
    // https://jestjs.io/docs/using-matchers#strings
    expect(result.error).toMatch(/payload no existe/)
  });
});
