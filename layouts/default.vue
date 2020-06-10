<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <nuxt-link to="/">
        <v-icon large>mdi-check-all</v-icon>
      </nuxt-link>
      <v-toolbar-title class="ml-3" v-text="title" />
      <v-spacer />

      <v-list class="links d-flex flex-row">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="link-item mx-1"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-app-bar>

    <v-content>
      <v-alert
        type="warning"
        text
        dense
        class="text-center"
      >
        Voter Registration Deadline: June 19, 2020. Primary Elections: June 30, 2020.
      </v-alert>
      <h3 class="d-flex blm justify-center align-center">
        #BLACKLIVESMATTER
      </h3>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Vote',
          to: '/vote'
        },
        {
          title: 'Organizations',
          to: '/organizations'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vote Utah Now - Black Lives Matter'
    }
  }
}
</script>

<style lang="stylus" scoped>
.links
  background none

  .link-item
    min-width 160px
    text-align center
    text-transform uppercase

.blm
  color black
  background-color yellow
  height 40px
  width 250px
  border 1px solid black
  text-align center
</style>
