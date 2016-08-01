<template lang="html">
    <div class="main-container container-fluid">
        <div class="row home-top-row">
            <div class="col-xs-6 home-logo-container">
                <img src="/imgs/itp_Logo.png" alt="" class="home-logo">
            </div>
            <div class="col-xs-6 home-text-container">
                <div class="home-text-wrap">
                    <h1>Interactive</h1>
                    <h1>Tx.</h1>
                    <h1>Planning</h1>
                    <h1>System</h1>
                </div>
            </div>
        </div>
        <div class="row home-bottom-row">
            <div
                class="col-xs-6 home-grid text-base"
                @click="goto({ name: 'questionList', params: { questionPhase: 1 } })"
            >
              <div>
                    <h1>Text-Based</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
            <div class="col-xs-6 home-tooth">
                <div>
                    <h1>Graphical</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goto(uri) {
            this.$router.go(uri)
        }
    }
}
</script>

<style lang="stylus">
</style>
