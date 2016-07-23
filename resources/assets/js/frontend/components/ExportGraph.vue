<template lang="jade">
div.export-grpah
    div.row-top.row
        div.row--rtl
            img(src='/imgs/nature/11.png')
            img(src='/imgs/nature/12.png')
            img(src='/imgs/nature/13.png')
            img(src='/imgs/nature/14.png')
            img(src='/imgs/nature/15.png')
            img(src='/imgs/nature/16.png')
            img(src='/imgs/nature/17.png')
            img(src='/imgs/nature/18.png')
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
img
    width 12.5%
    height auto
div.row
    display flex
    flex-direction row
    height 250px
    div.row--rtl
        display flex
        flex-direction row-reverse
    div.row--ltr
        display flex
        flex-direction row


</style>
