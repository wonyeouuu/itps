<template lang="jade">
div.page-button.page-button--up
div.page-button.page-button--down
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus" scoped>
button-unpressed = black
button-active = purple
button-radius = 20px
div.page-button
    width 2 * button-radius
    height 2 * button-radius
    border-radius button-radius
    background-color button-unpressed
    position relative
    box-shadow 8px 8px 15px gray
    &:hover
        background-color button-active
        box-shadow none
    &.page-button--up
        left 20px
        bottom 5px
    &.page-button--down
        right 20px
        top 5px
</style>
