<style lang="sass" rel="stylesheet/scss" scoped>
</style>

<template>
<div class="container questionListContainer">
    <div
        v-for='number in questionNumbers'
    >
        <question
            v-if="number != 4"
            :teeth="questions[number].teeth"
            :number="questions[number].number"
            :table-show="questions[number].tableShow"
            :title='questions[number].title'
        >
        </question>
        <question-four
            v-if="number == 4"
            :data="questions[number].teeth"
            :number="questions[number].number"
            :table-show="questions[number].tableShow"
            :title='questions[number].title'
        >
        </question-four>
    </div>
    <div class="button button-down">
        <page-buttons></page-buttons>
    </div>
</div>
</template>


<script>
import { init } from "../../vuex/actions"
import { getQuestions } from "../../vuex/getters"
import Question from "./Question.vue"
import QuestionFour from "./QuestionFour.vue"
import PageButtons from '../PageButtons.vue'
export default {
    components: { Question, QuestionFour, PageButtons },
    computed: {
        questionNumbers() {
            const switchObj = {
                1: [0],
                2: [1, 2, 3],
                3: [4, 5, 6, 7],
                4: [8, 9],
            }
            return switchObj[this.$route.params.questionPhase]
        }
    },
    vuex: {
        getters: {
            questions: getQuestions
        },
        actions: {
            init
        }
    },
    ready() {
        this.init()
    }
};
</script>
