<style lang="sass" rel="stylesheet/scss" scoped>
    .question-list-container {
        margin-top: 100px;
    }
</style>

<template>
    <div class="questions-list-container">
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
    </div>
</template>


<script>
    import { init } from "../../vuex/actions"
    import { getQuestions } from "../../vuex/getters"
    import Question from "./Question.vue"
    import QuestionFour from "./QuestionFour.vue"
    export default {
        props: {
            'questionNumbers': {
                type: Array
            }
        },
        components: { Question, QuestionFour },
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
