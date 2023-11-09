class LoginRouter {
  route (httpRequest) {
    return {
      statusCode: 400,
      body: {
        error: 'Missing param: email'
      }
    }
  }
}

describe('Login Router', () => {
  test('If no email is provided should return 400', () => {
    const sut = new LoginRouter() // sut = system under test
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual({
      error: 'Missing param: email'
    })
  })
})
