<template lang="jade">
div.main-container.container-fluid
    div.row.home-top-row
        div.col-xs-6.home-logo-container
            //- img.home-logo(:src='worm[animateProgress]', @click='animate()')
            img.home-logo(v-for='(progress, item) in worm', @click='animate()', v-show='animateProgress === progress', :src='item')
        div.col-xs-6.home-text-container
            div.home-text-wrap
                h1 Interactive
                h1 Tx.
                h1 Planning
                h1 System
    div.row.home-bottom-row
        div.col-xs-6.home-grid.text-base(@click='goto({ name: "questionList", params: { questionPhase: 1 } })')
            div
                h1 Text-Based
                h1 User
                h1 Interface
        div.col-xs-6.home-tooth
            div
                h1 Graphical
                h1 User
                h1 Interface
</template>

<script>
export default {
    data() {
        return {
            worm: [
                '/imgs/itp_Logo.png',
                '/imgs/first/00.png',
                '/imgs/first/01.png',
                '/imgs/first/02.png',
                '/imgs/first/03.png',
                '/imgs/first/04.png',
                '/imgs/first/05.png',
                '/imgs/first/06.png',
                '/imgs/first/07.png',
                '/imgs/first/08.png',
                '/imgs/first/09.png',
                '/imgs/first/10.png',
                '/imgs/first/11.png',
                '/imgs/first/12.png',
                '/imgs/first/13.png',
                '/imgs/first/14.png',
                '/imgs/first/15.png',
                '/imgs/first/16.png',
                '/imgs/first/17.png',
                '/imgs/first/18.png',
                '/imgs/first/19.png',
                '/imgs/first/20.png',
                '/imgs/first/21.png',
                '/imgs/first/22.png',
                '/imgs/first/23.png',
                '/imgs/first/24.png',
                '/imgs/first/25.png',
                '/imgs/first/26.png',
                '/imgs/first/27.png',
                '/imgs/first/28.png',
                '/imgs/first/29.png',
                '/imgs/first/30.png',
                '/imgs/first/31.png',
                '/imgs/second.gif'
            ],
            animateProgress: 0
        }
    },
    methods: {
        goto(uri) {
            this.$router.go(uri)
        },
        animate() {
            if (this.animateProgress === this.worm.length - 1) {
                return false
            }
            this.animateProgress += 1
        }
    }
}
</script>

<style lang="stylus" scoped></style>
