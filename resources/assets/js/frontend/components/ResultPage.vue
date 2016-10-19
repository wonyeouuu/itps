<template lang="jade">
div
    div.result-container
        div.result-header
            img(src='/imgs/result_header.png')
            div.print-btn(@click='print') Click Here To Save
        div.results
        div.result-footer
            img(src='/imgs/result_footer.png')
    a#hidden-anchor(download='export.png')
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
        // print() {
        //     window.print()
        // }
        print() {
            const resultContainer = document.querySelector('.result-container')
            html2canvas(resultContainer).then(canvas => {
                // const newImg = new Image()
                // newImg.src = canvas.toDataURL('image/png')
                // resultContainer.parentNode.replaceChild(newImg, resultContainer)
                const anchor = document.querySelector('#hidden-anchor')
                anchor.href = canvas.toDataURL('image/png')
                anchor.click()
            })
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
    overflow visible
    text-align center
    width 1000px
    margin 0 auto
    background-color white
.result-header
    position relative
    img
        width 100%
        height 230px
.result-footer
    img
        width 100%
        height 150px
.results
    width 900px
    margin 0 auto
.print-btn
    padding 5px
    position absolute
    top 115px
    right 170px
    font-size 25px
    font-weight bold
    background-color black
    color white
    &:hover
        background-color white
        color black
.number
    position relative
    top 240px
    left -40px
    width 40px
    height 40px
    border-radius 20px
    border 2px solid black
    line-height 36px
    font-size 24px
    font-weight bold

#hidden-anchor
    display none
</style>
