<template lang="jade">
div.container.questionListContainer
    div.export-graph
        div.row-top.row
            div.row--rtl
                img.t11(src='/imgs/nature/11.png')
                img.t12(src='/imgs/nature/12.png')
                img.t13(src='/imgs/nature/13.png')
                img.t14(src='/imgs/nature/14.png')
                img.t15(src='/imgs/nature/15.png')
                img.t16(src='/imgs/nature/16.png')
                img.t17(src='/imgs/nature/17.png')
                img.t18(src='/imgs/nature/18.png')
            div.row--ltr
                img.t21(src='/imgs/nature/21.png')
                img.t22(src='/imgs/nature/22.png')
                img.t23(src='/imgs/nature/23.png')
                img.t24(src='/imgs/nature/24.png')
                img.t25(src='/imgs/nature/25.png')
                img.t26(src='/imgs/nature/26.png')
                img.t27(src='/imgs/nature/27.png')
                img.t28(src='/imgs/nature/28.png')
        div.row-down.row
            div.row--rtl
                img.t31(src='/imgs/nature/31.png')
                img.t32(src='/imgs/nature/32.png')
                img.t33(src='/imgs/nature/33.png')
                img.t34(src='/imgs/nature/34.png')
                img.t35(src='/imgs/nature/35.png')
                img.t36(src='/imgs/nature/36.png')
                img.t37(src='/imgs/nature/37.png')
                img.t38(src='/imgs/nature/38.png')
            div.row--ltr
                img.t41(src='/imgs/nature/41.png')
                img.t42(src='/imgs/nature/42.png')
                img.t43(src='/imgs/nature/43.png')
                img.t44(src='/imgs/nature/44.png')
                img.t45(src='/imgs/nature/45.png')
                img.t46(src='/imgs/nature/46.png')
                img.t47(src='/imgs/nature/47.png')
                img.t48(src='/imgs/nature/48.png')
div.control-btn-down.control-btn-down--previous previous
div.control-btn-down.control-btn-down--export export
div.control-btn-up
    img.control-btn-up-logo(src='/imgs/itp_Logo.png')
    div.vitality.control-btn-up-block
        div.control-btn-up-text
            p Vita-
            p lity
        img(src='/imgs/buttons_on.png')
    div.perio-chart.control-btn-up-block
        div.control-btn-up-text
            p Perio-
            p chart
        img(src='/imgs/buttons_on.png')



</template>

<script>
import { getQuestions } from '../vuex/getters'

export default {
    vuex: {
        getters: {
            questions: getQuestions
        }
    },
    ready() {
        console.log(this.questions)
    }

}
</script>

<style lang="stylus" scoped>
total-width-1 = 2149
total-width-2 = 2145
total-width-3 = 1995
total-width-4 = 1995
.control-btn-up-text
    font-size 40px
    line-height 25px
    letter-spacing 8px
    text-align right
    text-shadow -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000
    color white

.control-btn-up
    position fixed
    top 20px
    right 20px
    height 100px
    display flex
    flex-direction row
    align-items center
    img.control-btn-up-logo
        width 80px
        margin-right 20px
    .control-btn-up-block
        display flex
        align-items center
        img
            cursor pointer
            width 50px
    .vitality
        margin-right 20px

div.export-graph
    padding 5%
img
    height auto
    &.t11
        width percentage(268 / total-width-1)
    &.t12
        width percentage(223 / total-width-1)
    &.t13
        width percentage(229 / total-width-1)
    &.t14
        width percentage(235 / total-width-1)
    &.t15
        width percentage(231 / total-width-1)
    &.t16
        width percentage(351 / total-width-1)
    &.t17
        width percentage(315 / total-width-1)
    &.t18
        width percentage(297 / total-width-1)

    &.t21
        width percentage(268 / total-width-2)
    &.t22
        width percentage(219 / total-width-2)
    &.t23
        width percentage(227 / total-width-2)
    &.t24
        width percentage(237 / total-width-2)
    &.t25
        width percentage(225 / total-width-2)
    &.t26
        width percentage(355 / total-width-2)
    &.t27
        width percentage(307 / total-width-2)
    &.t28
        width percentage(307 / total-width-2)

    &.t31
        width percentage(167 / total-width-3)
    &.t32
        width percentage(169 / total-width-3)
    &.t33
        width percentage(197 / total-width-3)
    &.t34
        width percentage(229 / total-width-3)
    &.t35
        width percentage(235 / total-width-3)
    &.t36
        width percentage(335 / total-width-3)
    &.t37
        width percentage(340 / total-width-3)
    &.t38
        width percentage(323 / total-width-3)

    &.t41
        width percentage(167 / total-width-4)
    &.t42
        width percentage(169 / total-width-4)
    &.t43
        width percentage(197 / total-width-4)
    &.t44
        width percentage(229 / total-width-4)
    &.t45
        width percentage(235 / total-width-4)
    &.t46
        width percentage(335 / total-width-4)
    &.t47
        width percentage(340 / total-width-4)
    &.t48
        width percentage(323 / total-width-4)
div.row
    display flex
    flex-direction row
    max-height 250px
    div.row--rtl
        display flex
        flex-direction row-reverse
    div.row--ltr
        display flex
        flex-direction row

.control-btn-down
    position fixed
    bottom 20px
    font-size 50px
    font-weight bold
    cursor pointer
    &.control-btn-down--previous
        left 20px
    &.control-btn-down--export
        right 20px
    &:hover
        text-shadow -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000
        color white
</style>
