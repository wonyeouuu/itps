<template lang="jade">
div.result-container
    div.print-btn(@click='print') Print
    div.result-header
        img(src='/imgs/result_header.png')
    div.results
    div.result-footer
        img(src='/imgs/result_footer.png')
</template>

<script>
import html2canvas from 'html2canvas'
import { getSaveList } from '../vuex/getters'

export default {
    vuex: {
        getters: {
            saveList: getSaveList
        }
    },
    methods: {
        print() {
            window.print()
        }
    },
    ready() {
        const resultContainer = document.querySelector('.results')
        this.saveList.forEach((save, ind) => {
            const newDiv = document.createElement('div')
            newDiv.className = 'number'
            newDiv.innerHTML = ind + 1
            resultContainer.appendChild(newDiv)
            resultContainer.appendChild(save.dom)
        })
    }
}
</script>

<style lang="stylus">
.result-container
    text-align center
    width 1000px
    margin 0 auto
.result-header
    img
        width 100%
        height 250px
.result-footer
    img
        width 100%
        height 200px
.print-btn
    padding 5px
    position fixed
    top 0
    right 0
    border 2px solid black
    font-size 30px
    font-weight bold
    background-color black
    color white
    &:hover
        background-color white
        color black
.number
    width 40px
    height 40px
    border-radius 20px
    border 2px solid black
    line-height 36px
    font-size 24px
    font-weight bold
</style>
