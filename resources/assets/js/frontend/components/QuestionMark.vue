<template lang="jade">
div.question-mark-container
    span.question-mark(@mouseenter='showBlock()', @mouseleave='hideBlock()') ?
    div.question-block(v-show='show', transition='right') {{{ text }}}
</template>

<script>
export default {
    props: ['text'],
    data() {
        return {
            show: false
        }
    },
    methods: {
        showBlock() {
            this.show = true
        },
        hideBlock() {
            this.show = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './transitions/right-transition.styl'
question-mark-color = rgb(244, 242, 80)
question-mark-background = rgb(182, 183, 182)
.question-mark-container
    z-index 10000
    display inline-block
    position relative
    margin 0
.question-mark
    display inline-block
    width 20px
    height 20px
    border-radius 5px
    background-color question-mark-background
    position relative
    top -2px
    text-align center
    font-size 14px
    line-height 20px
    color question-mark-color
    font-weight bold
    &:hover
        background-color lighten(question-mark-background, 20%)
.question-block
    position absolute
    font-size 14px
    top 0
    left 40px
    background question-mark-background
    border-radius 10px
    padding 10px
    white-space nowrap
    font-weight 500
    &:before
        content ' '
        position absolute
        width 0
        height 0
        left -10px
        top 10px
        border 5px solid
        border-color question-mark-background question-mark-background transparent transparent

</style>
