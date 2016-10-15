<template lang="jade">
div.app
    i-h-a(v-if='["graph", "result"].indexOf($route.name) == -1')
    graph-controller-list(v-if='["graph"].indexOf($route.name) != -1')
    router-view(transition='expand')
    about-page
    how-to-use-page
</template>

<script>
import IHA from './IHA.vue'
import GraphControllerList from './GraphControllerList.vue'
import AboutPage from './AboutPage.vue'
import HowToUsePage from './HowToUsePage.vue'
import store from '../vuex/store'
import { init } from "../vuex/actions"

export default {
    store,
    components: { IHA, AboutPage, HowToUsePage, GraphControllerList },
    vuex: {
        actions: {
            init
        }
    },
    ready() {
        this.init()
    }
}
</script>

<style lang="stylus">
@import './transitions/expand.styl'
div#app
    height 100%
</style>
