<style lang="scss" scoped>
    .question-list-container {
        margin-top: 100px;
    }
</style>

<template>
    <div class="question-list-container">
        <question number="1" title="Implant"></question>
        <question number="2" title="Missing Teeth"></question>
        <question number="3" title="Residual Roots"></question>
        <question number="5" title="Post"></question>
        <question number="6" title="Veneer"></question>
        <question number="7" title="RPD"></question>
        <question number="8" title="CD"></question>
        <question number="9" title="Caries"></question>
        <question number="10" title="Apical Lesion"></question>
    </div>
</template>


<script>
    import Question from "./question.vue";
    export default {
        el: '.question-list-container',
        components: { Question }

    };
</script>

