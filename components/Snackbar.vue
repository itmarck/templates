<template>
  <v-snackbar v-model="show" absolute app right dark>
    {{ message }}
    <template v-if="closeable" v-slot:action>
      <v-btn text color="primary" @click.native="show = false"> Cerrar </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import snackbar from '~/plugins/snackbar.js'

export default {
  data() {
    return {
      message: '',
      show: false,
      closeable: false,
    }
  },
  beforeMount() {
    snackbar.event.$on('show', (message) => {
      this.message = message
      this.show = true
    })
    snackbar.event.$on('basic', (message) => {
      this.message = message
      this.closeable = true
      this.show = true
    })
  },
}
</script>
