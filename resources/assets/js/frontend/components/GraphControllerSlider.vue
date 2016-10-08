<style lang="stylus" scoped>
</style>

<template lang='jade'>
div.graph-controller-slider
    slot(v-if='graphSlider == sliderTrigger')
</template>

<script>
import { getGraphSlider } from '../vuex/getters'

export default {
    props: ['sliderTrigger'],
    vuex: {
        getters: {
            graphSlider: getGraphSlider
        }
    }
}
</script>
