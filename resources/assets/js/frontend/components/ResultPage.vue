<template lang="jade">
div.result-container
    canvas#result-canvas(width='1000')
</template>

<script>
import { getExportCanvas } from '../vuex/getters'

export default {
    vuex: {
        getters: {
            exportCanvas: getExportCanvas
        }
    },
    ready() {
        const canvas = document.querySelector('#result-canvas')
        const ctx = canvas.getContext('2d')
        const backgroundImage = new Image()
        backgroundImage.src='/imgs/about_us_photo1.png'
        backgroundImage.onload = () => {
            ctx.drawImage(backgroundImage, 0, 0, 1000, 100)
        }
        canvas.height += this.exportCanvas.height
        ctx.drawImage(this.exportCanvas, 0, 100, 1000, this.exportCanvas.height)
    }
}
</script>

<style lang="stylus">
.result-container
    text-align center
</style>
