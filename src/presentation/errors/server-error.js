module.exports = class ServerError extends Error {
  constructor (paramName) {
    super('Server error')
    this.name = 'ServerError'
  }
}
