const validator = require('validator')

class EmailValidatorSpy {
  isValid (email) {
    return validator.isEmail(email)
  }
}

function MakeEmailValidatorSpy () {
  const emailValidatorSpy = new EmailValidatorSpy()
  return emailValidatorSpy
}

const makeSut = () => {
  return new MakeEmailValidatorSpy()
}

describe('Email Validator ', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('valid_email@mail.com')
    expect(validator.email).toBe('valid_email@mail.com')
  })
})
