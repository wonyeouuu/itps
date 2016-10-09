<style lang="stylus" scoped>
@import './transitions/flip.styl'
introColor = red
hr.member-intro-split
    margin 50px 0
div.shadow
    position absolute
    top 0
    left 0
    width 100vw
    height 100vh
    background rgba(82, 126, 104, 0.6)
div.pop-container
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    z-index 20000
    /*background rgba(82, 126, 104, 0.6)*/
    div.pop-content-container
        position absolute
        left calc(50% - 400px)
        border-radius 10px 0 0 0
        padding 0
        margin 12vh auto 0 auto
        width 800px
        height 76vh
        background white
        overflow-y scroll
        div.aboutShow
            position fixed
            top calc(12vh + 10px)
            left calc(50% - 390px)
            width 30px
            height 30px
            z-index 99999
            background url('/imgs/about_close.png')
            background-size cover
            cursor pointer
            &:hover
                background url('/imgs/about_close_activated.png')
                background-size cover
        div.pop-main
            img
                width 100%
</style>

<template lang='jade'>
div.pop-container(v-show='show', transition='flip')
    div.shadow(@click='howToUseShowToggle()')
    div.pop-content-container
        <!--div.aboutShow(@click='howToUseShowToggle()')-->
        div.pop-main
            img(src='/imgs/howtouse.jpg')
</template>

<script>
import { getHowToUseShow } from '../vuex/getters'
import { howToUseShowToggle } from '../vuex/actions'
export default {
    vuex: {
        getters: {
            show: getHowToUseShow
        },
        actions: {
            howToUseShowToggle
        }
    }
}
</script>
