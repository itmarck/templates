import repositories from '~/src/repositories'

export default ({ $axios }, inject) => {
  inject('repository', repositories($axios))
}
