const { insert_user, INVALID_NAME, INVALID_DOB, INVALID_EMAIL, INVALID_PASSWORD, USER_ALREADY_REGISTERED, userDb } = require('./api.js');

describe('insert_user', () => {
  beforeEach(() => {
    // Reset the userDB before each test
    userDb.length = 0;
    userDb.push({ user_name: 'joe', dob: new Date('2000-01-01'), email: 'joe@kundabox.com', password: '12ABCabc' });
  });

  test('Adding a user with proper values', () => {
    const result = insert_user('janet', new Date('1990-01-01'), 'jane@example.com', '12ABCabcd');
    expect(result.result).toBe(true);
    expect(result.code).toBe(null);
  });

  test('Adding a user that is already inserted into the DB', () => {
    const result = insert_user('joe', new Date('2000-01-01'), 'joe@kundabox.com', '12ABCabc');
    expect(result.result).toBe(false);
    expect(result.code).toBe(USER_ALREADY_REGISTERED);
  });

  test('Adding a user with non valid user_name (all possible use cases)', () => {
    const invalidNames = ['a', 'a12', 'a!@', 'abcd'];
    invalidNames.forEach((name) => {
      const result = insert_user(name, new Date('1990-01-01'), 'jane@example.com', 'Abc12345');
      expect(result.result).toBe(false);
      expect(result.code).toBe(INVALID_NAME);
    });
  });

  test('Adding a user with non valid dob (all possible use cases)', () => {
    const invalidDobs = [new Date('2021-01-01'), new Date('2013-01-01')];
    invalidDobs.forEach((dob) => {
      const result = insert_user('janet', dob, 'jane@example.com', 'Abc12345');
      expect(result.result).toBe(false);
      expect(result.code).toBe(INVALID_DOB);
    });
  });

  test('Adding a user with non valid email (all possible use cases)', () => {
    const invalidEmails = ['jane@', 'jane@example', 'jane@example.', '@example.com'];
    invalidEmails.forEach((email) => {
      const result = insert_user('janet', new Date('1990-01-01'), email, 'Abc12345');
      expect(result.result).toBe(false);
      expect(result.code).toBe(INVALID_EMAIL);
    });
  });



  test('Adding a user with non valid password (all possible invalid use cases)', () => {
    const invalidPasswords = ['Abc1', 'abc12345', 'ABCabcde', 'abc12345!'];
    invalidPasswords.forEach((password) => {
      const result = insert_user('janet', new Date('1990-01-01'), 'jane@example.com', password);
      expect(result.result).toBe(false);
      expect(result.code).toBe(INVALID_PASSWORD);
    });
  });
  
});
