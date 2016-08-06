<style lang="stylus" scoped>
.big-container
    position fixed
    display flex
    height 100vh
    padding-left 40px
    flex-direction column
    justify-content center

</style>

<template lang='jade'>
div.big-container
    div.btn-group-container
        graph-controller(:name='names[2]')
        graph-controller(:name='names[3]')
        graph-controller(:name='names[1]')
        graph-controller(:name='names[5]')
        graph-controller(:name='names[9]', :dashed='true')
        div(style='margin-left: 30px')
            graph-controller(name='Procelain')
            graph-controller(name='Metal')
        graph-controller(:name='names[4]')
        graph-controller(:name='names[6]')
        graph-controller(:name='names[0]')
        graph-controller(:name='names[7]')
        graph-controller(:name='names[8]')

</template>

<script>
import { getActiveGraphController } from '../vuex/getters'
import { setGraphController } from '../vuex/actions'

import GraphController from './GraphController.vue'
export default {
    components: {
        GraphController
    },
    data() {
        return {
            names: [
                'CD',//全口假牙 要上或下全部沒有才可以
                'Implant',//植體
                'Missing Teeth',// 缺牙
                'Residual Roots',// 殘根 牙冠爛掉 剩牙根
                'Veneer',// 陶瓷貼片
                'Post',// 差一根到牙根裡
                'RPD',//不用選 只有開關 會出現另一種顏色補齊沒有牙冠的地方 活動假牙
                'Caries',// 有真的牙齒冠才會有 蛀牙
                'Vitality',// 牙根蛀出球 要有牙根才可以選
                'FPD'
            ]
        }
    },
    vuex: {
        getters: {
            activeGraphController: getActiveGraphController
        },
        actions: {
            setGraphController
        }
    }

}
</script>
