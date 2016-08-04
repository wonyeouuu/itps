<template lang="jade">
div.app
    i-h-a(v-if='["graph"].indexOf($route.name) == -1')
    graph-controller-list(v-if='["graph"].indexOf($route.name) != -1')
    router-view(transition='expand')
    about-page
</template>

<script>
import IHA from './IHA.vue'
import GraphControllerList from './GraphControllerList.vue'
import AboutPage from './AboutPage.vue'
import store from '../vuex/store'
export default {
    store,
    components: { IHA, AboutPage, GraphControllerList }
}
</script>

<style lang="stylus">
@import './transitions/expand.styl'
div#app
    height 100%
</style>
