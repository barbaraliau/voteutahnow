<template>
  <v-layout class="vote d-flex flex-column pa-4">
    <v-layout class="d-flex flex-column text-center mb-1">
      <h1>Voting in Utah</h1>
      <h2>Primary Elections - June 30, 2020</h2>
    </v-layout>
    <v-divider />

    <v-flex class="text-center">
      <!-- <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      > -->
      <blockquote class="blockquote">
        &#8220;You've got to vote, vote, vote, vote. That's it; that's the way we move forward.&#8221;
        <footer>
          <small>
            <em>&mdash;Michelle Obama</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>

    <v-card class="mb-3">
      <v-card-title class="title">
        How Utah Political Parties Work
      </v-card-title>

      <v-card-text>
        <ul class="body-1">
          <li class="blue--text">
            You <em>must</em> be registered with a political party to vote in their primary elections.
          </li>
          <li>
            In other words, you must be registered as a Republican to vote in the Republican primaries; you must be registered as a Democrat to vote in the Democratic primaries.
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title class="title">
        There is NO Utah Democratic Primary this year
      </v-card-title>

      <v-card-text class="body-1">
        This means <em class="blue--text">you must be a registered Republican to vote</em>, as only voters registered with the Republican Party may vote in the Republican Primary Election, and the Republican Primary Election is the only primary election in Utah this year.
      </v-card-text>
    </v-card>

    <v-layout class="d-flex justify-center mt-5">
      <Link-Box
        title="Register to Vote - Online"
        subtitle="Let Your Voice Count"
        link="https://secure.utah.gov/voterreg/login.html?selection=REGISTER"
        :external="true"
        cta-message="Register Online"
      >
        <template v-slot:more>
          You must have a valid Utah driver license or valid Utah ID to register online to vote. If your license or ID address doesn't match your current address, <a href="https://secure.utah.gov/dlr/index.html" target="_blank" class="link">update it</a>.
        </template>
      </Link-Box>

      <Link-Box
        title="Register to Vote - Mail-in"
        subtitle="Be Part of the Action"
        link="https://voteinfo.utah.gov/wp-content/uploads/sites/42/2020/05/Voter-Registration-Form5-20.pdf"
        :external="true"
        cta-message="Register by Mail"
      >
        <template v-slot:more>
          If you can't register online, fill out this paper form and mail it to your county clerk's office. It must be <em>received</em> by your county clerk by 5:00 pm, June 19, 2020.
        </template>
      </Link-Box>

      <Link-Box
        title="Update Registration"
        subtitle="Update your voter registration online"
        link="https://secure.utah.gov/voterreg/login.html?selection=REGISTER"
        :external="true"
        cta-message="Update"
      >
        <template v-slot:more>
          Make sure your voter registration is up-to-date and change your party affiliation if needed.
        </template>
      </Link-Box>
    </v-layout>
  </v-layout>
</template>

<script>
import LinkBox from '@/components/Link-Box'

export default {
  name: 'Vote',

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
