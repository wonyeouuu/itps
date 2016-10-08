<style lang="stylus" scoped>
.big-container
    position fixed
    display flex
    height 100vh
    padding-left 40px
    flex-direction column
    justify-content center

</style>

<template lang='jade'>
div.big-container
    div.btn-group-container
        graph-controller(:name='names[0]')
        graph-controller(:name='names[1]')
        graph-controller(:name='names[2]')
        graph-controller(:name='names[3]')
        graph-controller(:name='names[4]', :dashed='true')
        graph-controller-slider(:slider-trigger='names[4]')
            div(style='margin-left: 30px')
                graph-controller(:name='names[5]')
                graph-controller(:name='names[6]')
                graph-controller(:name='names[7]')
        graph-controller(:name='names[8]')
        graph-controller(:name='names[9]')
        graph-controller(:name='names[10]', :dashed='true')
        graph-controller-slider(:slider-trigger='names[10]')
            div(style='margin-left: 30px')
                graph-controller(:name='names[11]')
                graph-controller(:name='names[12]')
                graph-controller(:name='names[13]')
                graph-controller(:name='names[14]')
        graph-controller(:name='names[15]')
        graph-controller(:name='names[16]', :dashed='true')
        graph-controller-slider(:slider-trigger='names[16]')
            div(style='margin-left: 30px')
                graph-controller(:name='names[17]')
                graph-controller(:name='names[18]')
                graph-controller(:name='names[19]')
</template>

<script>
import GraphControllerSlider from './GraphControllerSlider.vue'
import { getActiveGraphController, getGraphControllers, getGraphSlider } from '../vuex/getters'
import { setGraphController } from '../vuex/actions'

import GraphController from './GraphController.vue'
export default {
    components: {
        GraphController,
        GraphControllerSlider
    },
    vuex: {
        getters: {
            activeGraphController: getActiveGraphController,
            names: getGraphControllers,
            graphSlider: getGraphSlider
        },
        actions: {
            setGraphController
        }
    }

}
</script>
