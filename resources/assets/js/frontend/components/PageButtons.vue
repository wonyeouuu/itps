<template lang="jade">
div.page-button.page-button--up(@click='goUp()')
div.page-button.page-button--down(@click='goDown()')
</template>

<script>
export default {
  methods: {
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
button-active = purple
button-radius = 20px
div.page-button
    width 2 * button-radius
    height 2 * button-radius
    border-radius button-radius
    background-color button-unpressed
    position relative
    box-shadow 8px 8px 15px gray
    &:hover
        background-color button-active
        box-shadow none
    &.page-button--up
        left 20px
        bottom 5px
    &.page-button--down
        right 20px
        top 5px
</style>
