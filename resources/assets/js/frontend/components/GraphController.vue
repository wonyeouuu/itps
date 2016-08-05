<style lang="stylus" scoped>
.btn-group-container
    position fixed
    top 0
    padding 10vh 0 10vh 20px
    height 100vh

.graph-control-container
    margin-bottom 15px

.graph-control-btn
    width 30px
    height 20px
    border 2px solid black
    display flex
    align-items center
    justify-content center
    cursor pointer
    float left
    &.graph-control-btn--dashed
        border 2px dashed black
    .graph-control-btn-inside
        width 20px
        height 8px
        &.graph-control-btn-active
            background-color black
        &:hover
            background-color lightgray
.graph-control-text
    margin-left 40px

</style>

<template lang='jade'>
div.graph-control-container
    div.graph-control-btn(@click='setGraphController(name, dashed)', :class='{ "graph-control-btn--dashed": dashed }')
        div.graph-control-btn-inside(:class='{ "graph-control-btn-active": activeGraphController == name }')
    div.graph-control-text {{ name }}
</template>

<script>
import { getActiveGraphController } from '../vuex/getters'
import { setGraphController } from '../vuex/actions'

export default {
    props: {
        name: {
            type: String
        },
        dashed: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    vuex: {
        getters: {
            activeGraphController: getActiveGraphController
        },
        actions: {
            setGraphController
        }
    }
}
</script>
