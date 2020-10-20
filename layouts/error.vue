<template>
  <v-app>
    <h1 v-if="error.statusCode === 404" v-text="$t('error.notFound')" />
    <h1 v-else v-text="$t('error.default')" />
  </v-app>
</template>

<script>
export default {
  layout: 'basic',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
