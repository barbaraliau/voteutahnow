<template>
  <v-layout class="vote d-flex flex-column pa-4">
    <v-layout class="d-flex flex-column text-center mb-1">
      <h1>Organizations</h1>
      <h2>Get Involved</h2>
    </v-layout>
    <v-divider />

    <v-flex class="text-center">
      <!-- <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      > -->
      <blockquote class="blockquote">
        &#8220;If you are neutral in situations of injustice, you have chosen the side of the oppressor.&#8221;
        <footer>
          <small>
            <em>&mdash;Desmond Tutu</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>

    <v-layout class="d-flex justify-center mt-5">
      <Link-Box
        title="Black Lives Matter - Utah"
        subtitle="Official BLM Chapter"
        link="https://www.blacklivesmatterutah.com/"
        :external="true"
        cta-message="Learn More"
      >
        <template v-slot:more>
          "We fight oppression by every means necessary. We use calling campaigns, canvassing, protests, boycotts, and lawsuits to send a clear message to racists that their ignorance will no longer be tolerated."
        </template>
      </Link-Box>

      <Link-Box
        title="ACLU"
        subtitle="American Civil Liberties Union"
        link="https://www.aclu.org/"
        :external="true"
        cta-message="Fight for Liberty"
      >
        <template v-slot:more>
          "The ACLU dares to create a more perfect union — beyond one person, party, or side. Our mission is to realize this promise of the United States Constitution for all and expand the reach of its guarantees."
        </template>
      </Link-Box>

      <Link-Box
        title="NAACP"
        subtitle="National Association for the Advancement of Colored People"
        link="https://naacp.org"
        :external="true"
        cta-message="Take Action"
      >
        <template v-slot:more>
          "The vision of the National Association for the Advancement of Colored People is to ensure a society in which all individuals have equal rights without discrimination based on race."
        </template>
      </Link-Box>
    </v-layout>
  </v-layout>
</template>

<script>
import LinkBox from '@/components/Link-Box'

export default {
  name: 'Organizations',

  components: {
    LinkBox
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.vote
  .link
    color $yellow
</style>
