<style lang="scss" scoped>
</style>

<template>
    <div class="question-list-container">
        <question number="1" title="Implan"></question>
    </div>
</template>


<script>
    import Question from "./question.vue";
    export default {
        el: '.question-list-container',
        components: { Question }

    };
</script>

