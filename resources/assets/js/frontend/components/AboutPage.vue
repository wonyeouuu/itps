<style lang="stylus" scoped>
@import './transitions/flip.styl'
introColor = red
hr.member-intro-split
    margin 50px 0
div#about-container
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    z-index 20000
    background rgba(82, 126, 104, 0.6)
    div#about-content-container
        border-radius 10px 0 0 0
        padding 0 20px
        margin 12vh auto 0 auto
        width 800px
        height 76vh
        background white
        overflow-y scroll
        div#aboutShow
            position fixed
            top 12vh
            left calc(50% - 400px)
            width 20px
            height 20px
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
                top -165px
                width 100%
        /*div.member-intro
            div.member-intro-photo
                color introColor
                h1
                    text-align center
                    font-size 100px
                    font-weight 700
                    position relative
                    top -60px
                p
                    text-align center
                    font-size 25px
                    letter-spacing 160px
                    position relative
                    top 100px
                    left 80px
            div.member-intro-text
                width 50%
                margin 0 auto
                h1
                    font-size 50px
                    font-weight 500
                p
                    font-size 30px
                    font-weight 200
                &.align-left
                    width 50%
                    margin-left 10%
            div#member-intro-photo1
                width 85%
                height 500px
                margin 0 auto
                background url('/imgs/about_us_photo1.png')
                background-size cover
            div#member-intro-photo2
                width 85%
                height 500px
                margin 0 auto
                background url('/imgs/about_us_photo2.png')
                background-size cover
                h1
                    font-size 74px
                p
                    top 130px
            div#member-intro-photo3
                width 95%
                height 300px
                margin 0 auto
                background url('/imgs/about_us_photo3.png')
                background-size 100% 100%*/


</style>

<template lang='jade'>
div#about-container(v-show='aboutShow', transition='flip')
    div#about-content-container
        div#aboutShow(@click='aboutShowToggle()')
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
        //- div.member-intro
        //-     div.member-intro-photo#member-intro-photo1
        //-         h1 Po-yen chen
        //-         p 陳柏諺
        //-     div.member-intro-text
        //-         h1 Leader.
        //-         p
        //-             |born in 1990, live in Taipei,<br>
        //-             |Taiwan.<br>
        //-             |Dentist, Founder of we<br>
        //-             |design company.<br><br>
        //-             |Striving for the entry of a<br>
        //-             |M.S. degree in orthodontics<br>
        //-             |in the U.S.<br>
        //-             |Please let me know if<br>
        //-             |there's one seat left.<br><br>
        //-             |eric79523@gmail.com
        //-     hr.member-intro-split
        //-     div.member-intro-photo#member-intro-photo2
        //-         h1 Sheng-chia huang
        //-         p 黃勝家
        //-     div.member-intro-text.align-left
        //-         h1 Graphical Designer.
        //-         p
        //-             |Sheng-chia huang, born in<br>
        //-             |1990, live in London,<br>
        //-             |England.<br>
        //-             |Freelance Graphical<br>
        //-             |designer. Students from<br>
        //-             |CSM<br><br>
        //-             |XXxxxxXXXXXX<br>
        //-             |XXxxxxXXXXXX<br>
        //-             |XXxxxxXXXXXX<br>
        //-             |XXxxxxXXXXXX<br><br>
        //-             |j173262000@gmail.com
        //-     hr.member-intro-split
        //-     div.member-intro-photo#member-intro-photo3
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
    }
}
</script>
