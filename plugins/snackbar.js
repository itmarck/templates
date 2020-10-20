import Vue from 'vue'

const snackbar = {
  install(Vue) {
    if (this.installed) return
    this.installed = true

    this.event = new Vue()

    Vue.prototype.$snackbar = {
      show(message) {
        snackbar.event.$emit('show', message, true)
      },
      basic(message) {
        snackbar.event.$emit('basic', message)
      },
    }
  },
}

Vue.use(snackbar)

export default snackbar
