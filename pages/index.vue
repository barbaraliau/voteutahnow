<template>
  <v-container
    column
    justify-center
    align-center
  >
    <div>
      <h1 class="display-1">
        BLACK.LIVES.MATTER
      </h1>

      <h2 class="headline">
        Be the Change
      </h2>
    </div>

    <v-row
      class="mt-5 d-flex justify-center"
    >
      <v-btn
        v-for="item in items"
        :key="item.title"
        height="150"
        min-width="150"
        ripple
        color="#fce21b"
        nuxt
        :to="item.link"
        class="headline black--text ma-4"
      >
        <b>{{ item.title }}</b>
      </v-btn>
    </v-row>

    <!-- <v-card>
      <v-card-title>
        Organizations
      </v-card-title>

      <v-btn
        v-for="item in externalLinks"
        :key="item.title"
        large
        block
        ripple
        color="#fce21b"
        :href="item.link"
        target="_blank"
        class="black--text"
      >
        {{ item.title }}
      </v-btn>
    </v-card> -->

  </v-container>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      items: [{
        title: 'Vote',
        link: '/vote'
      }, {
        title: 'Support',
        link: '/organizations'
      }]
    }
  }
}
</script>

<style lang="stylus">
a
  text-decoration none
</style>
