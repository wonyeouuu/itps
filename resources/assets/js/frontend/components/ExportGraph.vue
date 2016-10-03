<template lang="jade">
div.container.questionListContainer
    div.export-graph
        div.row-top.row
            div.row--rtl
                div.overlay-container(v-for='toothID in ["11", "12", "13", "14", "15", "16", "17", "18"]')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID]', v-if='hook[toothID]')
                    img.bar(:src='barPathBuilder(toothID)', v-if='bar.up')
            div.row--ltr
                div.overlay-container(v-for='toothID in ["21", "22", "23", "24", "25", "26", "27", "28"]')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID]', v-if='hook[toothID]')
                    img.bar(:src='barPathBuilder(toothID)', v-if='bar.up')
        div.row-down.row
            div.row--rtl
                div.overlay-container(v-for='toothID in ["41", "42", "43", "44", "45", "46", "47", "48"]')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID]', v-if='hook[toothID]')
                    img.bar(:src='barPathBuilder(toothID)', v-if='bar.down')
            div.row--ltr
                div.overlay-container(v-for='toothID in ["31", "32", "33", "34", "35", "36", "37", "38"]')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID]', v-if='hook[toothID]')
                    img.bar(:src='barPathBuilder(toothID)', v-if='bar.down')
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
import { allTeeth, connectorsSplit } from '../vuex/teethConstructor'
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
    },
    computed: {
        teethImg() {
            return this.allTeeth().reduce((carry, teeth) => {
                const status = this.statusMapper(teeth)
                carry[teeth] = `/imgs/teeth/${teeth}/${status}.png`
                return carry
            }, {})
        },
        bar() {
            return this.barMapper()
        },
        hook() {
            return this.hookMapper().reduce((carry, hookDetail) => {
                switch(hookDetail.clasp) {
                    case 'A':
                        carry[hookDetail.id] = `/imgs/hooks/${hookDetail.id}/${hookDetail.pos == 'left' ? '85' : '86'}.png`
                        break
                    case 'W':
                        carry[hookDetail.id] = `/imgs/hooks/${hookDetail.id}/${hookDetail.pos == 'left' ? '83' : '84'}.png`
                        break
                    case 'I':
                        carry[hookDetail.id] = `/imgs/hooks/${hookDetail.id}/${hookDetail.pos == 'left' ? '82' : '81'}.png`
                        break
                }
                return carry
            }, {})
        }
    },
    methods: {
        allTeeth,
        barPathBuilder(id) {
            return `/imgs/hooks/${id}/80.png`
        },
        barMapper() {
            const upperLeft1 = this.questions[8 - 1].teeth.a.filter(tooth => ~~(tooth.id / 10) === 1)
            const upperRight2 = this.questions[8 - 1].teeth.a.filter(tooth => ~~(tooth.id / 10) === 2)
            const lowerRight3 = this.questions[8 - 1].teeth.a.filter(tooth => ~~(tooth.id / 10) === 3)
            const lowerLeft4 = this.questions[8 - 1].teeth.a.filter(tooth => ~~(tooth.id / 10) === 4)
            const hasAnyTrue = (carry, tooth) => !!(carry || tooth.selected)
            return {
                up: upperLeft1.reduce(hasAnyTrue, false) && upperRight2.reduce(hasAnyTrue, false),
                down: lowerRight3.reduce(hasAnyTrue, false) && lowerLeft4.reduce(hasAnyTrue, false)
            }
        },
        hookMapper() {
            const dentureBases = this.questions[8 - 1].teeth.a
            const hasClasp = this.questions[8 - 1].teeth.b.filter(clasp => clasp.selected)
            const add = (carry, item) => carry + item
            const claspConnector = hasClasp.map(clasp => {
                return {
                    connectorArr: connectorsSplit().filter(connectorArr => connectorArr.reduce(add, 0) == clasp.id)[0],
                    clasp: clasp.selected
                }
            })
            const hookResult = claspConnector.map(claspDetail => {
                return {
                    clasp: claspDetail.clasp,
                    selectedArr: claspDetail.connectorArr.map(toothID => {
                        const toothIndex = _.findIndex(dentureBases, tooth => tooth.id == toothID)
                        return {
                            id: toothID,
                            selected: dentureBases[toothIndex].selected
                        }
                    })
                }
            })
            return hookResult.map(hookDetail => {
                if (hookDetail.selectedArr[0].selected) {
                    return {
                        clasp: hookDetail.clasp,
                        id: hookDetail.selectedArr[0].id,
                        pos: 'left'
                    }
                } else {
                    return {
                        clasp: hookDetail.clasp,
                        id: hookDetail.selectedArr[1].id,
                        pos: 'right'
                    }
                }
            })
        },
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
                        return '28'
                    }
                    return '27'
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
            return '01'
        },
        // statusBuilder(tooth, hook = false) {
        //     return {
        //         tooth,
        //         hook
        //     }
        // }
    }
}
</script>

<style lang="stylus" scoped>
/*@import '/resources/assets/stylus/teeth.styl'*/
total-width-1 = 600
total-width-2 = 600
total-width-3 = 600
total-width-4 = 600
z-bar = 1
z-tooth = 2
z-hook = 3
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

div.overlay-container
    position relative
    img:nth-child(1)
        position relative
        z-index z-tooth
        width 100%

div.export-graph
    width 100%
    padding 5%
    img.hooks
        z-index z-hook
        position absolute
        top 0
        left 0
        max-height 200px
    img.bar
        z-index z-bar
        position absolute
        top 0
        left 0
        max-height 200px
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

        /*&.t11
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
            width percentage(82 / total-width-1)*/

        /*&.t21
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
            width percentage(129 / total-width-4)*/
</style>
