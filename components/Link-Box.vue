<template>
  <v-card
    outlined
    class="link-box mx-3 my-3"
    :min-height="height"
    :width="width"
  >
    <v-card-title>
      <slot name="title">
        {{ title }}
      </slot>
    </v-card-title>
    <v-card-subtitle class="yellow--text link-box__subtitle">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </v-card-subtitle>
    <v-card-text class="link-box__text">
      {{ more }}
      <slot name="more" />
    </v-card-text>

    <v-icon>
    </v-icon>

    <v-card-actions>
      <slot name="cta">
        <!-- If no slot is declared, button is used -->
        <v-btn
          v-if="external"
          :href="link"
          target="_blank"
          large
          block
          class="link-box__cta"
        >
          {{ ctaMessage }}
        </v-btn>
        <v-btn
          v-else-if="ctaMessage"
          :link="link"
          nuxt
          block
          class="link-box__cta"
        >
          {{ ctaMessage }}
        </v-btn>
      </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LinkBox',

  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    more: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '320'
    },
    width: {
      type: String,
      default: '300'
    },
    link: {
      type: String,
      default: '/'
    },
    external: {
      type: Boolean,
      default: false
    },
    ctaMessage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.link-box
  text-decoration none

  &__link
    text-decoration none
    width 100%
  &__cta
    color $accent

  &__subtitle
    min-height 60px

  &__text
    min-height 150px

  .v-card--outlined
    border 1px solid $accent

.text--accent
  color $accent
</style>
