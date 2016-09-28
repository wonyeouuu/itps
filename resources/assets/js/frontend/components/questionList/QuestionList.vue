<style lang="sass" rel="stylesheet/scss" scoped>
</style>

<template lang='html'>
<div class="container questionListContainer">
    <div
        v-for='number in questionNumbers'
        v-if='$route.params.questionPhase == 1 || $route.params.questionPhase == 2'
    >
        <question
            :teeth="questions[number].teeth"
            :number="questions[number].number"
            :table-show="questions[number].tableShow"
            :title='questions[number].title'
        >
        </question>
    </div>
    <div
        v-for='number in questionNumbers'
        v-if='$route.params.questionPhase == 3'
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
    <div
        v-for='number in questionNumbers'
        v-if='$route.params.questionPhase == 4'
    >
        <question-eight
            v-if='number == 7'
            :data="questions[number].teeth"
            :number="questions[number].number"
            :table-show="questions[number].tableShow"
            :title='questions[number].title'
        >
        </question-eight>
    </div>
    <div
        v-for='number in questionNumbers'
        v-if='$route.params.questionPhase == 5'
    >
        <question
            v-if='number == 8'
            :teeth="questions[number].teeth"
            :number="questions[number].number"
            :table-show="questions[number].tableShow"
            :title='questions[number].title'
        >
            <question-mark
                text='We’re unable to express the classification of dental caries at this time.<br>
                      Help support us or make a donation for further development.'
            >
            </question-mark>
        </question>
        <question-ten
            v-if='number == 9'
            :data="questions[number].teeth"
            :number="questions[number].number"
            :table-show="questions[number].tableShow"
            :title='questions[number].title'
        >
        </question-ten>
    </div>
    <div class="button button-down">
        <page-buttons></page-buttons>
    </div>
</div>
</template>


<script>
import { getQuestions, getQuestionMarks } from "../../vuex/getters"
import Question from "./Question.vue"
import QuestionFour from "./QuestionFour.vue"
import QuestionEight from "./QuestionEight.vue"
import QuestionTen from "./QuestionTen.vue"
import PageButtons from '../PageButtons.vue'
import QuestionMark from '../QuestionMark.vue'

export default {
    components: {
        Question,
        QuestionFour,
        QuestionEight,
        QuestionTen,
        PageButtons,
        QuestionMark
    },
    computed: {
        questionNumbers() {
            const switchObj = {
                1: [0],
                2: [1, 2, 3],
                3: [4, 5, 6],
                4: [7],
                5: [8, 9]
            }
            return switchObj[this.$route.params.questionPhase]
        }
    },
    vuex: {
        getters: {
            questions: getQuestions,
            questionMarks: getQuestionMarks
        }
    }
};
</script>
