<style lang="sass" rel="stylesheet/scss" scoped>
    .question-list-container {
        margin-top: 100px;
    }
</style>

<template>
    <div class="questions-list-container">
        <question
            :teeth="questions[0].teeth"
            :number="questions[0].number"
            :table-show="questions[0].tableShow"
            :title="questions[0].title"
        ></question>
        <question
                :teeth="questions[1].teeth"
                :number="questions[1].number"
                :table-show="questions[1].tableShow"
                :title="questions[1].title"
        ></question>
        <question
                :teeth="questions[2].teeth"
                :number="questions[2].number"
                :table-show="questions[2].tableShow"
                :title="questions[2].title"
        ></question>
        <question-four
                :data="questions[3].teeth"
                :number="questions[3].number"
                :table-show="questions[3].tableShow"
                :title="questions[3].title"
        >
        </question-four>
        <question
                :teeth="questions[4].teeth"
                :number="questions[4].number"
                :table-show="questions[4].tableShow"
                :title="questions[4].title"
        ></question>
        <question
                :teeth="questions[5].teeth"
                :number="questions[5].number"
                :table-show="questions[5].tableShow"
                :title="questions[5].title"
        ></question>
        <question
                :teeth="questions[6].teeth"
                :number="questions[6].number"
                :table-show="questions[6].tableShow"
                :title="questions[6].title"
        ></question>
        <question
                :teeth="questions[7].teeth"
                :number="questions[7].number"
                :table-show="questions[7].tableShow"
                :title="questions[7].title"
        ></question>
        <question
                :teeth="questions[8].teeth"
                :number="questions[8].number"
                :table-show="questions[8].tableShow"
                :title="questions[8].title"
        ></question>
        <question
                :teeth="questions[9].teeth"
                :number="questions[9].number"
                :table-show="questions[9].tableShow"
                :title="questions[9].title"
        ></question>
        <question
                :teeth="questions[10].teeth"
                :number="questions[10].number"
                :table-show="questions[10].tableShow"
                :title="questions[10].title"
        ></question>
    </div>
</template>


<script>
    import { init } from "../../vuex/actions"
    import { getQuestions } from "../../vuex/getters"
    import Question from "./Question.vue"
    import QuestionFour from "./QuestionFour.vue"
    export default {
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

