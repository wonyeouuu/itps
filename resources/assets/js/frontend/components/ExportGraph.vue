<template lang="jade">
div.container.questionListContainer
    div.export-graph
        div.row-top.row
            div.row--rtl
                img.t11(v-img='"/imgs/teeth/11/01.png"', :src='preload')
                img.t12(v-img='"/imgs/teeth/12/01.png"', :src='preload')
                img.t13(v-img='"/imgs/teeth/13/01.png"', :src='preload')
                img.t14(v-img='"/imgs/teeth/14/01.png"', :src='preload')
                img.t15(v-img='"/imgs/teeth/15/01.png"', :src='preload')
                img.t16(v-img='"/imgs/teeth/16/01.png"', :src='preload')
                img.t17(v-img='"/imgs/teeth/17/01.png"', :src='preload')
                img.t18(v-img='"/imgs/teeth/18/01.png"', :src='preload')
                //- img.t11(src='/imgs/teeth/11/01.png')
                //- img.t12(src='/imgs/teeth/12/01.png')
                //- img.t13(src='/imgs/teeth/13/01.png')
                //- img.t14(src='/imgs/teeth/14/01.png')
                //- img.t15(src='/imgs/teeth/15/01.png')
                //- img.t16(src='/imgs/teeth/16/01.png')
                //- img.t17(src='/imgs/teeth/17/01.png')
                //- img.t18(src='/imgs/teeth/18/01.png')
            div.row--ltr
                img.t21(v-img='"/imgs/teeth/21/01.png"', :src='preload')
                img.t22(v-img='"/imgs/teeth/22/01.png"', :src='preload')
                img.t23(v-img='"/imgs/teeth/23/01.png"', :src='preload')
                img.t24(v-img='"/imgs/teeth/24/01.png"', :src='preload')
                img.t25(v-img='"/imgs/teeth/25/01.png"', :src='preload')
                img.t26(v-img='"/imgs/teeth/26/01.png"', :src='preload')
                img.t27(v-img='"/imgs/teeth/27/01.png"', :src='preload')
                img.t28(v-img='"/imgs/teeth/28/01.png"', :src='preload')
                //- img.t21(src='/imgs/teeth/21/01.png')
                //- img.t22(src='/imgs/teeth/22/01.png')
                //- img.t23(src='/imgs/teeth/23/01.png')
                //- img.t24(src='/imgs/teeth/24/01.png')
                //- img.t25(src='/imgs/teeth/25/01.png')
                //- img.t26(src='/imgs/teeth/26/01.png')
                //- img.t27(src='/imgs/teeth/27/01.png')
                //- img.t28(src='/imgs/teeth/28/01.png')
        div.row-down.row
            div.row--rtl
                img.t31(src='/imgs/teeth/31/01.png')
                img.t32(src='/imgs/teeth/32/01.png')
                img.t33(src='/imgs/teeth/33/01.png')
                img.t34(src='/imgs/teeth/34/01.png')
                img.t35(src='/imgs/teeth/35/01.png')
                img.t36(src='/imgs/teeth/36/01.png')
                img.t37(src='/imgs/teeth/37/01.png')
                img.t38(src='/imgs/teeth/38/01.png')
            div.row--ltr
                img.t41(src='/imgs/teeth/41/01.png')
                img.t42(src='/imgs/teeth/42/01.png')
                img.t43(src='/imgs/teeth/43/01.png')
                img.t44(src='/imgs/teeth/44/01.png')
                img.t45(src='/imgs/teeth/45/01.png')
                img.t46(src='/imgs/teeth/46/01.png')
                img.t47(src='/imgs/teeth/47/01.png')
                img.t48(src='/imgs/teeth/48/01.png')
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
    data() {
        return {
            preload: 'https://d3us2i0tqwa7m7.cloudfront.net/charts/53d6c6761861499d3e00bbb0/black_20square_small.jpg'
        }
    },
    ready() {
        console.log(this.questions)
    }

}
</script>

<style lang="stylus" scoped>
/*@import '/resources/assets/stylus/teeth.styl'*/
total-width-1 = 600
total-width-2 = 600
total-width-3 = 600
total-width-4 = 600
.control-btn-up-text
    font-size 30px
    line-height 20px
    font-weight bold
    letter-spacing 8px
    text-align right

.control-btn-up
    position fixed
    top 20px
    right 40px
    height 100px
    display flex
    flex-direction row
    align-items center
    img.control-btn-up-logo
        width 60px
        margin-right 15px
    .control-btn-up-block
        display flex
        align-items center
        img
            cursor pointer
            width 35px
    .vitality
        margin-right 15px

div.export-graph
    padding 5%
    img
        height auto
        &.t11
            width percentage(75 / total-width-1)
        &.t12
            width percentage(61 / total-width-1)
        &.t13
            width percentage(65 / total-width-1)
        &.t14
            width percentage(66 / total-width-1)
        &.t15
            width percentage(64 / total-width-1)
        &.t16
            width percentage(100 / total-width-1)
        &.t17
            width percentage(87 / total-width-1)
        &.t18
            width percentage(82 / total-width-1)

        &.t21
            width percentage(75 / total-width-2)
        &.t22
            width percentage(61 / total-width-2)
        &.t23
            width percentage(64 / total-width-2)
        &.t24
            width percentage(67 / total-width-2)
        &.t25
            width percentage(63 / total-width-2)
        &.t26
            width percentage(100 / total-width-2)
        &.t27
            width percentage(87 / total-width-2)
        &.t28
            width percentage(83 / total-width-2)

        &.t31
            width percentage(46 / total-width-3)
        &.t32
            width percentage(49 / total-width-3)
        &.t33
            width percentage(55 / total-width-3)
        &.t34
            width percentage(64 / total-width-3)
        &.t35
            width percentage(66 / total-width-3)
        &.t36
            width percentage(95 / total-width-3)
        &.t37
            width percentage(96 / total-width-3)
        &.t38
            width percentage(129 / total-width-3)

        &.t41
            width percentage(46 / total-width-4)
        &.t42
            width percentage(49 / total-width-4)
        &.t43
            width percentage(55 / total-width-4)
        &.t44
            width percentage(64 / total-width-4)
        &.t45
            width percentage(66 / total-width-4)
        &.t46
            width percentage(94 / total-width-4)
        &.t47
            width percentage(97 / total-width-4)
        &.t48
            width percentage(129 / total-width-4)
div.row
    display flex
    flex-direction row
    max-height 200px
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
        left 40px
    &.control-btn-down--export
        right 40px
    &:hover
        text-shadow -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000
        color white
</style>
