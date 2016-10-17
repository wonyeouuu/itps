<template lang="jade">
div.result-container
    //- canvas#result-canvas(width='1000')
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
    ready() {
        const resultContainer = document.querySelector('.result-container')
        this.saveList.forEach(save => {
            resultContainer.appendChild(save.dom)
            // html2canvas(save.dom).then(canvas => {
            //     resultContainer.appendChild(canvas)
            // })
        })
        console.log(document.querySelectorAll('.export-graph'))
        setTimeout(() => {
            console.log('start')
            document.querySelectorAll('.export-graph').forEach(dom => {
                console.log(dom)
                html2canvas(dom).then(canvas => {
                    console.log(canvas)
                    dom.parentNode.replaceChild(canvas, dom)
                })
            })
        }, 1000)
        // this.saveList.forEach(save => {
        //     resultContainer.appendChild(save.canvas)
        // })
        // const canvas = document.querySelector('#result-canvas')
        // const anchor = document.querySelector('#hidden-anchor')
        // const ctx = canvas.getContext('2d')
        // const backgroundImage = new Image()
        // backgroundImage.src='/imgs/about_us_photo1.png'
        // backgroundImage.onload = () => {
        //     ctx.drawImage(backgroundImage, 0, 0, 1000, 100)
        //     console.log(this.exportCanvas)
        //     anchor.href = canvas.toDataURL('image/png')
        //     anchor.click()
        // }
        // canvas.height += this.exportCanvas.height
        // ctx.drawImage(this.exportCanvas, 0, 100, 1000, this.exportCanvas.height)
    }
}
</script>

<style lang="stylus">
.result-container
    text-align center
</style>
