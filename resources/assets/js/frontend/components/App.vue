<template lang="jade">
div.app
    i-h-a
    router-view(transition='expand')
    about-page
</template>

<script>
import IHA from './IHA.vue'
import AboutPage from './AboutPage.vue'
import store from '../vuex/store'
export default {
    store,
    components: { IHA, AboutPage }
}
</script>

<style lang="stylus">
@import './transitions/expand.styl'
div#app
    height 100%
</style>
