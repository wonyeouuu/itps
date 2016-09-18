<template lang="jade">
div.main-container.container-fluid
    div.row.home-top-row
        div.col-xs-12.home-logo-container
            img.home-logo(v-for='(progress, item) in worm', @click='animate()', v-show='animateProgress === progress', :src='item')
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
            worm: this.randomWorm(),
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
        },
        randomWorm() {
            const randomNum = Math.floor((Math.random() * 4))
            const wormCases = [
                'worm_1',
                'worm_2',
                'worm_3',
                'worm_big'
            ]
            const wormDir = wormCases[randomNum]
            return [
                '/imgs/logo.jpg',
                `/imgs/worm/${wormDir}/worm_first/1.jpg`,
                `/imgs/worm/${wormDir}/worm_first/2.jpg`,
                `/imgs/worm/${wormDir}/worm_first/3.jpg`,
                `/imgs/worm/${wormDir}/worm_first/4.jpg`,
                `/imgs/worm/${wormDir}/worm_first/5.jpg`,
                `/imgs/worm/${wormDir}/worm_second.gif`
            ]
        }
    }
}
</script>

<style lang="stylus" scoped></style>
