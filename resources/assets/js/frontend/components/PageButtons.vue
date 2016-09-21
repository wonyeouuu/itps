<template lang="jade">
div.page-button.page-button--up(@click='goUp()', @mouseenter='toggleU(true)', @mouseleave='toggleU(false)')
    p.page-button-text(v-show='showU') u
div.page-button.page-button--down(@click='goDown()', , @mouseenter='toggleD(true)', @mouseleave='toggleD(false)')
    p.page-button-text(v-show='showD') d
</template>

<script>
export default {
    data() {
        return {
            showU: false,
            showD: false
        }
    },
    methods: {
        toggleU(newStatus) {
            this.showU = newStatus
        },
        toggleD(newStatus) {
            this.showD = newStatus
        },
        goUp() {
            const switchObj = {
                1: '/',
                2: {
                    name: 'questionList',
                    params: {
                        questionPhase: 1
                    }
                },
                3: {
                    name: 'questionList',
                    params: {
                        questionPhase: 2
                    }
                },
                4: {
                    name: 'questionList',
                    params: {
                        questionPhase: 3
                    }
                },
                5: {
                    name: 'questionList',
                    params: {
                        questionPhase: 4
                    }
                }
            }
            this.$router.go(switchObj[this.$route.params.questionPhase])
        },
        goDown() {
            const switchObj = {
                1: {
                    name: 'questionList',
                    params: {
                        questionPhase: 2
                    }
                },
                2: {
                    name: 'questionList',
                    params: {
                        questionPhase: 3
                    }
                },
                3: {
                    name: 'questionList',
                    params: {
                        questionPhase: 4
                    }
                },
                4: {
                    name: 'questionList',
                    params: {
                        questionPhase: 5
                    }
                },
                5: {
                    name: 'graph'
                }
            }
            this.$router.go(switchObj[this.$route.params.questionPhase])
        },
    }
}
</script>

<style lang="stylus" scoped>
button-unpressed = black
button-hovered = rgb(128, 22, 74)
button-text-color = rgb(62, 87, 159)
button-radius = 20px
div.page-button
    width 2 * button-radius
    height 2 * button-radius
    border-radius button-radius
    background-color button-unpressed
    position relative
    box-shadow 8px 8px 15px gray
    &:hover
        background-color button-hovered
        box-shadow 0px 0px 0px
    &.page-button--up
        left 20px
        bottom 5px
    &.page-button--down
        right 20px
        top 5px
    .page-button-text
        position relative
        color button-text-color
        top 25px
        left 36px
        transform rotate(-45deg)
</style>
