<template lang="jade">
div.container.questionListContainer
    div.export-graph
        div.row-top.row
            div.row--rtl
                div.image-container.t11
                    img(:src='test[current]', @click='current = current ? 0 : 1')
                div.image-container.t12
                    img(src='/imgs/teeth/12/01.png')
                div.image-container.t13
                    img(src='/imgs/teeth/13/01.png')
                div.image-container.t14
                    img(src='/imgs/teeth/14/01.png')
                div.image-container.t15
                    img(src='/imgs/teeth/15/01.png')
                div.image-container.t16
                    img(src='/imgs/teeth/16/01.png')
                div.image-container.t17
                    img(src='/imgs/teeth/17/01.png')
                div.image-container.t18
                    img(src='/imgs/teeth/18/01.png')
            div.row--ltr
                div.image-container.t21
                    img(src='/imgs/teeth/21/01.png')
                div.image-container.t22
                    img(src='/imgs/teeth/22/01.png')
                div.image-container.t23
                    img(src='/imgs/teeth/23/01.png')
                div.image-container.t24
                    img(src='/imgs/teeth/24/01.png')
                div.image-container.t25
                    img(src='/imgs/teeth/25/01.png')
                div.image-container.t26
                    img(src='/imgs/teeth/26/01.png')
                div.image-container.t27
                    img(src='/imgs/teeth/27/01.png')
                div.image-container.t28
                    img(src='/imgs/teeth/28/01.png')
        div.row-down.row
            div.row--rtl
                div.image-container.t31
                    img(src='/imgs/teeth/31/01.png')
                div.image-container.t32
                    img(src='/imgs/teeth/32/01.png')
                div.image-container.t33
                    img(src='/imgs/teeth/33/01.png')
                div.image-container.t34
                    img(src='/imgs/teeth/34/01.png')
                div.image-container.t35
                    img(src='/imgs/teeth/35/01.png')
                div.image-container.t36
                    img(src='/imgs/teeth/36/01.png')
                div.image-container.t37
                    img(src='/imgs/teeth/37/01.png')
                div.image-container.t38
                    img(src='/imgs/teeth/38/01.png')
            div.row--ltr
                div.image-container.t41
                    img(src='/imgs/teeth/41/01.png')
                div.image-container.t42
                    img(src='/imgs/teeth/42/01.png')
                div.image-container.t43
                    img(src='/imgs/teeth/43/01.png')
                div.image-container.t44
                    img(src='/imgs/teeth/44/01.png')
                div.image-container.t45
                    img(src='/imgs/teeth/45/01.png')
                div.image-container.t46
                    img(src='/imgs/teeth/46/01.png')
                div.image-container.t47
                    img(src='/imgs/teeth/47/01.png')
                div.image-container.t48
                    img(src='/imgs/teeth/48/01.png')
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
            preload: 'http://design.ubuntu.com/wp-content/uploads/logo-ubuntu_su-white-hex-140x140.png',
            test: [
                '/imgs/teeth/11/01.png',
                '/imgs/teeth/11/02.png'
            ],
            test2: [
                '/imgs/teeth/12/01.png',
                '/imgs/teeth/12/02.png'
            ],
            current: 0,
            current2: 0
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
    width 100%
    padding 5%
    div.image-container
        img
            height 100%
            width 100%
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
