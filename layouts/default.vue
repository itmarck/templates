<template>
  <v-app>
    <v-main>
      <v-container class="content" fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.content {
  max-width: 900px;
}

.v-btn__content {
  text-transform: none;
}

.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
