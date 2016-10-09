<style lang="stylus" scoped>
@import './transitions/flip.styl'
introColor = red
div.shadow
    position absolute
    top 0
    left 0
    width 100vw
    height 100vh
    background rgba(82, 126, 104, 0.6)
hr.member-intro-split
    margin 50px 0
div#about-container
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    z-index 20000
    div#about-content-container
        position absolute
        left calc(50% - 400px)
        background white
        border-radius 10px 0 0 0
        padding 0 20px
        margin 12vh auto 0 auto
        width 800px
        height 76vh
        background white
        overflow-y scroll
        div#aboutShow
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
        img
            width 100%
        p#about-intro
            font-weight bold
            font-size 20px
            line-height 1.1
            text-align right
            position relative
            top -200px
        div#mail-container
            padding-left 110px
            div#mail-image
                width 300px
                height 220px
                background url('/imgs/mail-image.png')
                background-size cover
                cursor pointer
                &:hover
                    background url('/imgs/mail-image-activated.png')
                    background-size cover
            div#mail-intro
                position relative
                top -20px
                font-family 'GillSans'
                padding-left 10px
                font-size 100px
                font-weight 600
                span.mail-intro-big
                    position relative
                    top -40px
                    font-size 80px
                span.mail-intro-small
                    font-size 40px
                    position relative
                    top -140px
        div#about-main
            img
                position relative
                top -90px
                width 100%
</style>

<template lang='jade'>
div#about-container(v-show='aboutShow', transition='flip')
    div.shadow(@click='aboutShowToggle()')
    div#about-content-container
        <!--div#aboutShow(@click='aboutShowToggle()')-->
        img(src='/imgs/about_us_top.png')
        p#about-intro.pull-right
            |If you would like to<br>
            |offer your advices<br>
            |discuss a possible<br>
            |project<br>
            |or know more about<br>
            |us please feel free to<br>
            |drop in.<br><br>
            |Team ITPS
        div#mail-container
            div#mail-image
            div#mail-intro
                |dentITPS<br>
                |<span class='mail-intro-big'>@</span><br>
                |<span class='mail-intro-small'>gmail.com</span>
        div#about-main
            img(src='/imgs/about_us.jpg')
</template>

<script>
import { getAboutShow } from '../vuex/getters'
import { aboutShowToggle } from '../vuex/actions'

export default {
    vuex: {
        getters: {
            aboutShow: getAboutShow
        },
        actions: {
            aboutShowToggle
        }
    },
    methods: {
        test(e) {
            console.log('fku')
        }
    }
}
</script>
