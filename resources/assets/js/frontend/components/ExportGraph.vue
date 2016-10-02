<template lang="jade">
div.container.questionListContainer
    div.export-graph
        div.row-top.row
            div.row--rtl
                img.t11(:src='preload', v-img='teethImg["11"]')
                img.t12(:src='preload', v-img='teethImg["12"]')
                img.t13(:src='preload', v-img='teethImg["13"]')
                img.t14(:src='preload', v-img='teethImg["14"]')
                img.t15(:src='preload', v-img='teethImg["15"]')
                img.t16(:src='preload', v-img='teethImg["16"]')
                img.t17(:src='preload', v-img='teethImg["17"]')
                img.t18(:src='preload', v-img='teethImg["18"]')
            div.row--ltr
                img.t21(:src='preload', v-img='teethImg["21"]')
                img.t22(:src='preload', v-img='teethImg["22"]')
                img.t23(:src='preload', v-img='teethImg["23"]')
                img.t24(:src='preload', v-img='teethImg["24"]')
                img.t25(:src='preload', v-img='teethImg["25"]')
                img.t26(:src='preload', v-img='teethImg["26"]')
                img.t27(:src='preload', v-img='teethImg["27"]')
                img.t28(:src='preload', v-img='teethImg["28"]')
        div.row-down.row
            div.row--rtl
                img.t41(:src='preload', v-img='teethImg["41"]')
                img.t42(:src='preload', v-img='teethImg["42"]')
                img.t43(:src='preload', v-img='teethImg["43"]')
                img.t44(:src='preload', v-img='teethImg["44"]')
                img.t45(:src='preload', v-img='teethImg["45"]')
                img.t46(:src='preload', v-img='teethImg["46"]')
                img.t47(:src='preload', v-img='teethImg["47"]')
                img.t48(:src='preload', v-img='teethImg["48"]')
            div.row--ltr
                img.t31(:src='preload', v-img='teethImg["31"]')
                img.t32(:src='preload', v-img='teethImg["32"]')
                img.t33(:src='preload', v-img='teethImg["33"]')
                img.t34(:src='preload', v-img='teethImg["34"]')
                img.t35(:src='preload', v-img='teethImg["35"]')
                img.t36(:src='preload', v-img='teethImg["36"]')
                img.t37(:src='preload', v-img='teethImg["37"]')
                img.t38(:src='preload', v-img='teethImg["38"]')
div.control-btn-down.control-btn-down--previous previous
div.control-btn-down.control-btn-down--export export
div.control-btn-up
    img.control-btn-up-logo(src='/imgs/itp_Logo.png')
    div.vitality.control-btn-up-block
        div.control-btn-up-text
            p Vita-
            p lity
        img(src='/imgs/buttons_on.png')
    div.perio-chart.control-btn-up-block
        div.control-btn-up-text
            p Perio-
            p chart
        img(src='/imgs/buttons_on.png')



</template>

<script>
import _ from 'lodash'
import { allTeeth } from '../vuex/teethConstructor'
import { getQuestions } from '../vuex/getters'

export default {
    vuex: {
        getters: {
            questions: getQuestions
        }
    },
    data() {
        return {
            preload: 'http://design.ubuntu.com/wp-content/uploads/logo-ubuntu_su-white-hex-140x140.png'
        }
    },
    ready() {
        // this.questions[0].teeth.forEach(tooth => {
        //     console.log(tooth.id)
        // })
    },
    computed: {
        teethImg() {
            return this.allTeeth().reduce((carry, teeth) => {
                const status = this.statusMapper(teeth)
                carry[teeth] = `/imgs/teeth/${teeth}/${status}.png`
                return carry
            }, {})
        }
    },
    methods: {
        allTeeth,
        statusMapper(toothID) {
            const teethIndex = _.findIndex(this.questions[0].teeth, obj => obj.id === toothID)
            if (this.questions[1 - 1].teeth[teethIndex].selected) {// CD
                if (this.questions[2 - 1].teeth[teethIndex].selected) {// CD + Implant
                    return '17'
                }
                if (this.questions[4 - 1].teeth[teethIndex].selected) {// CD + RR
                    if (this.questions[7 - 1].teeth[teethIndex].selected) {// CD + RR + post
                        if (this.questions[9 - 1].teeth[teethIndex].selected) {// CD + RR + post + decayed teeth
                            return '25'
                        }
                        return '15'
                    }
                    if (this.questions[9 - 1].teeth[teethIndex].selected) {// CD + RR + decayed teeth
                        return '26'
                    }
                    return '14'
                }
                return '16'
            }
            if (this.questions[2 - 1].teeth[teethIndex].selected) {// Implant
                if (this.questions[5 - 1].teeth.a[teethIndex].selected === 'M') {// Implant + FPD(M)
                    return '11'
                } else if (this.questions[5 - 1].teeth.a[teethIndex].selected === 'P') {// Implant + FPD(P)
                    return '07'
                }
                if (this.questions[8 - 1].teeth.a[teethIndex].selected) {// Implant + RPD
                    return '17'
                }
                return '04'
            }
            if (this.questions[3 - 1].teeth[teethIndex].selected) {// Missing Teeth
                if (this.questions[5 - 1].teeth.a[teethIndex].selected === 'M') {// Missing Teeth + FPD(M)
                    return '10'
                } else if (this.questions[5 - 1].teeth.a[teethIndex].selected === 'P') {// Missing Teeth + FPD(P)
                    return '06'
                }
                return '03'
            }
            if (this.questions[4 - 1].teeth[teethIndex].selected) {// RR
                if (this.questions[7 - 1].teeth[teethIndex].selected) {// RR + post
                    if (this.questions[8 - 1].teeth.a[teethIndex].selected && this.questions[9 - 1].teeth[teethIndex].selected) {// RR + post + RPD + decayed teeth
                        return '25'
                    }
                    if (this.questions[8 - 1].teeth.a[teethIndex].selected) {// RR + post + RPD
                        return '15'
                    }
                    if (this.questions[9 - 1].teeth[teethIndex].selected) {// RR + post + decayed teeth
                        // return '28'// not yet
                    }
                    // return '27'// not yet
                }
                if (this.questions[8 - 1].teeth.a[teethIndex].selected) {// RR + RPD
                    if (this.questions[9 - 1].teeth[teethIndex].selected) {// RR + RPD + decayed teeth
                        return '26'
                    }
                    return '14'
                }
                if (this.questions[9 - 1].teeth[teethIndex].selected) {// RR + decayed teeth
                    return '19'
                }
                return '02'
            }
            if (this.questions[5 - 1].teeth.a[teethIndex].selected === 'M') {// FPD(M)
                if (this.questions[7 - 1].teeth[teethIndex].selected && this.questions[9 - 1].teeth[teethIndex].selected) {// FPD(M) + posts + decayed teeth
                    return '22'
                }
                if (this.questions[7 - 1].teeth[teethIndex].selected) {// FPD(M) + posts
                    return '09'
                }
                if (this.questions[9 - 1].teeth[teethIndex].selected) {// FPD(M) + decayed teeth
                    return '23'
                }
                return '08'
            } else if (this.questions[5 - 1].teeth.a[teethIndex].selected === 'P') {// FPD(P)
                if (this.questions[7 - 1].teeth[teethIndex].selected && this.questions[9 - 1].teeth[teethIndex].selected) {// FPD(P) + posts + decayed teeth
                    return '20'
                }
                if (this.questions[7 - 1].teeth[teethIndex].selected) {// FPD(P) + posts
                    return '13'
                }
                if (this.questions[9 - 1].teeth[teethIndex].selected) {// FPD(P) + decayed teeth
                    return '21'
                }
                return '05'
            }
            if (this.questions[6 - 1].teeth[teethIndex].selected) {// Veneer
                if (this.questions[9 - 1].teeth[teethIndex].selected) {// Veneer + decayed teeth
                    return '24'
                }
                return '12'
            }
            if (this.questions[7 - 1].teeth[teethIndex].selected) {// posts
                if (this.questions[9 - 1].teeth[teethIndex].selected) {// posts + decayed teeth
                    return '28'
                }
                return '27'
            }
            if (this.questions[9 - 1].teeth[teethIndex].selected) {// decayed teeth
                return '18'
            }
            if (this.questions[8 - 1].teeth.a[teethIndex].selected) {// RPD
                return '16'
            }
            return '01'// nothing matched => default
        }
    }
}
</script>

<style lang="stylus" scoped>
/*@import '/resources/assets/stylus/teeth.styl'*/
total-width-1 = 600
total-width-2 = 600
total-width-3 = 600
total-width-4 = 600
.control-btn-up-text
    font-size 30px
    line-height 20px
    font-weight bold
    letter-spacing 8px
    text-align right

.control-btn-up
    position fixed
    top 20px
    right 40px
    height 100px
    display flex
    flex-direction row
    align-items center
    img.control-btn-up-logo
        width 60px
        margin-right 15px
    .control-btn-up-block
        display flex
        align-items center
        img
            cursor pointer
            width 35px
    .vitality
        margin-right 15px

div.export-graph
    width 100%
    padding 5%
    img
        &.t11
            width percentage(75 / total-width-1)
        &.t12
            width percentage(61 / total-width-1)
        &.t13
            width percentage(65 / total-width-1)
        &.t14
            width percentage(66 / total-width-1)
        &.t15
            width percentage(64 / total-width-1)
        &.t16
            width percentage(100 / total-width-1)
        &.t17
            width percentage(87 / total-width-1)
        &.t18
            width percentage(82 / total-width-1)

        &.t21
            width percentage(75 / total-width-2)
        &.t22
            width percentage(61 / total-width-2)
        &.t23
            width percentage(64 / total-width-2)
        &.t24
            width percentage(67 / total-width-2)
        &.t25
            width percentage(63 / total-width-2)
        &.t26
            width percentage(100 / total-width-2)
        &.t27
            width percentage(87 / total-width-2)
        &.t28
            width percentage(83 / total-width-2)

        &.t31
            width percentage(46 / total-width-3)
        &.t32
            width percentage(49 / total-width-3)
        &.t33
            width percentage(55 / total-width-3)
        &.t34
            width percentage(64 / total-width-3)
        &.t35
            width percentage(66 / total-width-3)
        &.t36
            width percentage(95 / total-width-3)
        &.t37
            width percentage(96 / total-width-3)
        &.t38
            width percentage(129 / total-width-3)

        &.t41
            width percentage(46 / total-width-4)
        &.t42
            width percentage(49 / total-width-4)
        &.t43
            width percentage(55 / total-width-4)
        &.t44
            width percentage(64 / total-width-4)
        &.t45
            width percentage(66 / total-width-4)
        &.t46
            width percentage(94 / total-width-4)
        &.t47
            width percentage(97 / total-width-4)
        &.t48
            width percentage(129 / total-width-4)
div.row
    display flex
    flex-direction row
    max-height 200px
    div.row--rtl
        display flex
        flex-direction row-reverse
    div.row--ltr
        display flex
        flex-direction row

.control-btn-down
    position fixed
    bottom 20px
    font-size 50px
    font-weight bold
    cursor pointer
    &.control-btn-down--previous
        left 40px
    &.control-btn-down--export
        right 40px
    &:hover
        text-shadow -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000
        color white
</style>
