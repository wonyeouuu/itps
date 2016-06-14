<style lang="sass" rel="stylesheet/scss" scoped>
    .question-list-container {
        margin-top: 100px;
    }
</style>

<template>
    <div class="question-list-container">
        <question
            v-for="question in questions"
            :teeth="question.teeth"
            :number="question.number"
            :table-show="question.tableShow"
            :title="question.title"
        ></question>
    </div>
</template>


<script>
    import { init } from "../../vuex/actions"
    import { getQuestions } from "../../vuex/getters"
    import Question from "./question.vue"
    export default {
        components: { Question },
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

