// Testing Pure Functions

// 🐨 import the function that we're testing
import cases from 'jest-in-case'
import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//

describe('isAllowed will only pass some passwords', () => {
  const allowedPasswords = ['!aBc123']
  const disallowedPasswords = [
    'a2c!',
    'ABCdef!',
    'abc123!',
    'ABC123!',
    'ABCdef123',
    '123456!',
  ]

  allowedPasswords.forEach((password) => {
    test(`allows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(true)
    })
  })

  disallowedPasswords.forEach((password) => {
    test(`disallows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(false)
    })
  })
})

cases(
  'isPasswordAllowed: valid password',
  (options) => {
    expect(isPasswordAllowed(options.password)).toBe(true)
  },
  {
    validPassword: {
      password: '!aBc123',
    },
  },
)

cases(
  'isPasswordAllowed: invalid password',
  (options) => {
    expect(isPasswordAllowed(options.password)).toBe(false)
  },
  {
    'too short': {
      password: 'a2c!',
    },
    digit: {
      password: 'abc!',
    },
  },
)
