import UserRepository from './user'

// Add repositories into imports array
const imports = [UserRepository]

class Factory {
  constructor(axios) {
    this.axios = axios
    this.repositories = {}
  }

  getRepositories() {
    return this.repositories
  }

  addRepository(Repository) {
    const repository = new Repository(this.axios)
    this.repositories[repository.name] = repository
  }
}

export default function (axios) {
  const factory = new Factory(axios)

  imports.forEach((repository) => {
    factory.addRepository(repository)
  })

  return factory.getRepositories()
}
