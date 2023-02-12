// Testing Pure Functions

// 🐨 import the function that we're testing
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
