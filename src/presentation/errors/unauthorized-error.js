module.exports = class UnautorizedError extends Error {
  constructor (paramName) {
    super('Unauthenticated')
    this.name = 'UnautorizedError'
  }
}
