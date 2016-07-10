<style lang="stylus" scoped>
div#about-container
    display none
    position fixed
    top 0
    left 0
    height 100%
    width 100%
    background rgba(100, 100, 100, 0.5)
    div#about-content-container
        border-radius 10px 0 0 0
        padding 0 20px
        margin 5% auto 0 auto
        width 800px
        height 80%
        background white
        overflow-y scroll
        img
            width 100%
        p#about-intro
            font-weight bold
            font-size 20px
            line-height 1.1
            text-align right
            position relative
            top -200px
        div#mail-container
            div#mail-image
                width 300px
                height 220px
                background url('/imgs/mail-image.png')
                background-size cover
                cursor pointer
                &:hover
                    background url('/imgs/mail-image-activated.png')
                    background-size cover
            div#mail-intro
                padding-left 10px
                font-size 60px
                letter-spacing 10px
                line-height 1.4
                font-weight bold
                span.mail-intro-big
                    font-size 80px
                    line-height 0.6
                span.mail-intro-small
                    font-size 40px
                    position relative
                    top -55px
</style>

<template lang='jade'>
div#about-container
    div#about-content-container
        img(src='/imgs/about_us_top.png')
        p#about-intro.pull-right
            |If you would like to<br>
            |offer your advices<br>
            |discuss a possible<br>
            |project<br>
            |or know more about<br>
            |us please feel free to<br>
            |drop in.<br><br>
            |Team IPTS
        div#mail-container
            div#mail-image
            div#mail-intro
                |dentITPS<br>
                |<span class='mail-intro-big'>@</span><br>
                |<span class='mail-intro-small'>gmail.com</span>
        hr



</template>

<script>

</script>
