export default class UserRepository {
  constructor(axios) {
    this.name = 'user'
    this.axios = axios
  }

  async get() {
    return await this.axios.$get('/user')
  }
}
