<template lang="jade">
div.export-grpah
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
            img(src='/imgs/nature/21.png')
            img(src='/imgs/nature/22.png')
            img(src='/imgs/nature/23.png')
            img(src='/imgs/nature/24.png')
            img(src='/imgs/nature/25.png')
            img(src='/imgs/nature/26.png')
            img(src='/imgs/nature/27.png')
            img(src='/imgs/nature/28.png')
    div.row-down.row
        div.row--rtl
            img(src='/imgs/nature/31.png')
            img(src='/imgs/nature/32.png')
            img(src='/imgs/nature/33.png')
            img(src='/imgs/nature/34.png')
            img(src='/imgs/nature/35.png')
            img(src='/imgs/nature/36.png')
            img(src='/imgs/nature/37.png')
            img(src='/imgs/nature/38.png')
        div.row--ltr
            img(src='/imgs/nature/41.png')
            img(src='/imgs/nature/42.png')
            img(src='/imgs/nature/43.png')
            img(src='/imgs/nature/44.png')
            img(src='/imgs/nature/45.png')
            img(src='/imgs/nature/46.png')
            img(src='/imgs/nature/47.png')
            img(src='/imgs/nature/48.png')
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
total-width = 2149
div.export-grpah
    padding 5%
img
    width 12.5%
    height auto
    &.t11
        width percentage(268 / total-width)
    &.t12
        width percentage(223 / total-width)
    &.t13
        width percentage(229 / total-width)
    &.t14
        width percentage(235 / total-width)
    &.t15
        width percentage(231 / total-width)
    &.t16
        width percentage(351 / total-width)
    &.t17
        width percentage(315 / total-width)
    &.t18
        width percentage(297 / total-width)
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


</style>
