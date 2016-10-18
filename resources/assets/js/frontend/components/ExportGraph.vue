<template lang="jade">
div.container.questionListContainer
    div#export-graph.export-graph
        div.row-top.row
            div.bar-container
                img(src='/imgs/bar/up.png', v-if='bar.up')
            div.connector-container(:class='{ "connector-container--hoverable": ["Connector", "A Bar", "I Bar", "Wrought wire"].indexOf(activeGraphController) !== -1 }')
                img(v-for='connectorID in upperConnectors',
                    v-img='connector[connectorID] ? connector[connectorID] : `/imgs/connectors/92/${connectorID}.png`',
                    @click='graphConnectorToggle(activeGraphController, connectorID)',
                    :class='{ "not-selectable": !selectable[connectorID] }',
                    :src='preload')
            div.row--rtl
                div.overlay-container.overlay-container--hover(v-for='toothID in ["11", "12", "13", "14", "15", "16", "17", "18"]',
                                        @click='graphTeethToggle(activeGraphController, toothID)',
                                        :class='{ "not-selectable": !selectable[toothID] }')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][0].img : null', v-if='hook[toothID] ? hook[toothID][0] : false')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][1].img : null', v-if='hook[toothID] ? hook[toothID][1] : false')
            div.row--ltr
                div.overlay-container(v-for='toothID in ["21", "22", "23", "24", "25", "26", "27", "28"]', @click='graphTeethToggle(activeGraphController, toothID)')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][0].img : null', v-if='hook[toothID] ? hook[toothID][0] : false')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][1].img : null', v-if='hook[toothID] ? hook[toothID][1] : false')
        div.row-down.row
            div.bar-container
                img(src='/imgs/bar/down.png', v-if='bar.down')
            div.connector-container(:class='{ "connector-container--hoverable": ["Connector", "A Bar", "I Bar", "Wrought wire"].indexOf(activeGraphController) !== -1 }')
                img(v-for='connectorID in lowerConnectors',
                    v-img='connector[connectorID] ? connector[connectorID] : `/imgs/connectors/92/${connectorID}.png`',
                    @click='graphConnectorToggle(activeGraphController, connectorID)',
                    :class='{ "not-selectable": !selectable[connectorID] }',
                    :src='preload')
            div.row--rtl
                div.overlay-container(v-for='toothID in ["41", "42", "43", "44", "45", "46", "47", "48"]', @click='graphTeethToggle(activeGraphController, toothID)')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][0].img : null', v-if='hook[toothID] ? hook[toothID][0] : false')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][1].img : null', v-if='hook[toothID] ? hook[toothID][1] : false')
            div.row--ltr
                div.overlay-container(v-for='toothID in ["31", "32", "33", "34", "35", "36", "37", "38"]', @click='graphTeethToggle(activeGraphController, toothID)')
                    img(:src='preload', v-img='teethImg[toothID]')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][0].img : null', v-if='hook[toothID] ? hook[toothID][0] : false')
                    img.hooks(:src='preload', v-img='hook[toothID] ? hook[toothID][1].img : null', v-if='hook[toothID] ? hook[toothID][1] : false')
    div.control-btn-down.control-btn-down--previous(@click='goBack') previous
    div.control-btn-down.control-btn-down--export(@click.prevent='$router.go({ name: "result" })') export
    div.control-btn-down.control-btn-down--save(@click='save') save
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
    div.save-list
        ul
            li(v-for='n in 5', @click='load(n)', :class='{ active: saveList[n] }') {{ n + 1 }}
</template>

<script type="text/babel">
import _ from 'lodash'
import html2canvas from 'html2canvas'
import { allTeeth, connectorsSplit } from '../vuex/teethConstructor'
import { getQuestions, getActiveGraphController, getSelectable, getSaveList } from '../vuex/getters'
import { graphTeethToggle, graphConnectorToggle, setExportCanvas, save, load } from '../vuex/actions'

export default {
    vuex: {
        getters: {
            questions: getQuestions,
            activeGraphController: getActiveGraphController,
            selectable: getSelectable,
            saveList: getSaveList
        },
        actions: {
            graphTeethToggle,
            graphConnectorToggle,
            setExportCanvas,
            save,
            load
        }
    },
    data() {
        return {
            preload: '/imgs/preload.png',
            upperConnectors: connectorsSplit().splice(0, 15).map(connectorsArr => connectorsArr.reduce((a, b) => a + b)),
            lowerConnectors: connectorsSplit().splice(15, 30).map(connectorsArr => connectorsArr.reduce((a, b) => a + b)).reverse()
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
            const tmp = this.hookMapper().map(hookDetail => {
                switch(hookDetail.clasp) {
                    case 'A':
                        hookDetail.img = `/imgs/hooks/${hookDetail.id}/${hookDetail.pos == 'left' ? '86' : '85'}.png`
                        break
                    case 'W':
                        hookDetail.img = `/imgs/hooks/${hookDetail.id}/${hookDetail.pos == 'left' ? '84' : '83'}.png`
                        break
                    case 'I':
                        hookDetail.img = `/imgs/hooks/${hookDetail.id}/${hookDetail.pos == 'left' ? '82' : '81'}.png`
                        break
                }
                return hookDetail
            })
            return _.groupBy(tmp, 'id')
        },
        connector() {
            return this.connectorMapper()
        }
    },
    methods: {
        allTeeth,
        goBack() {
            history.go(-1)
        },
        log(msg) {
            console.log(msg)
        },
        // setExport() {
        //     html2canvas(document.getElementById('export-graph')).then(canvas => {
        //         this.setExportCanvas(canvas)
        //         this.$router.go({ name: 'result' })
        //     })
        // },
        // exportSave() {
        //     html2canvas(document.getElementById('export-graph')).then(teethCanvas => {
        //         const canvas = document.querySelector('#result-canvas')
        //         const anchor = document.querySelector('#hidden-anchor')
        //         const ctx = canvas.getContext('2d')
        //         const backgroundImage = new Image()
        //         backgroundImage.src='/imgs/about_us_photo1.png'
        //         backgroundImage.onload = () => {
        //             ctx.drawImage(backgroundImage, 0, 0, 1000, 100)
        //             anchor.href = canvas.toDataURL('image/png')
        //             anchor.click()
        //         }
        //         canvas.height += teethCanvas.height
        //         ctx.drawImage(teethCanvas, 0, 100, 1000, teethCanvas.height)
        //     })
        // },
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
        connectorMapper() {
            const add = (carry, item) => carry + item
            const FPD = this.questions[5 - 1].teeth.a
            const connectorsData = this.questions[5 - 1].teeth.b
                                    .filter(datum => datum.selected)
                                    .map(connector => {
                                        connector.img = connectorsSplit()
                                        .filter(connectorArr => connectorArr.reduce(add, 0) == connector.id)[0]
                                        .map(toothID => {
                                            return FPD[_.findIndex(FPD, tooth => tooth.id == toothID)].selected
                                        })
                                        .reduce((carry, selected) => {
                                            return carry && selected == 'M'
                                        }, true)
                                        return connector
                                    })
                                    .reduce((carry, connector) => {
                                        carry[connector.id] = connector.img ?
                                            `/imgs/connectors/91/${connector.id}.png` :
                                            `/imgs/connectors/90/${connector.id}.png`
                                        return carry
                                    }, {})
            return connectorsData

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
                        id: hookDetail.selectedArr[1].id,
                        pos: 'left'
                    }
                } else {
                    return {
                        clasp: hookDetail.clasp,
                        id: hookDetail.selectedArr[0].id,
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
z-bar = 1
z-connector = 2
z-tooth = 3
z-hook = 4
.image-container
    text-align center
.not-selectable
    cursor not-allowed
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
        height 100%
        position absolute
        top 0
        left 0
    img.bar
        z-index z-bar
        height 100%
        position absolute
        top 0
        left 0
div.row
    display flex
    flex-direction row
    max-height 200px
    position relative
    div.bar-container
        z-index z-bar
        width 100%
        height 100%
        position absolute
        img
            height 100%
    div.connector-container
        display flex
        z-index z-connector
        width 100%
        height 100%
        position absolute
        &.connector-container--hoverable
            z-index z-hook
        img
            flex 1 0 auto
            height 100%
            &:hover
                background rgba(#C4E1D4, 0.2)
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
    &.control-btn-down--save
        left calc(50% - 40px)
    &:hover
        text-shadow -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000
        color white

#hidden-download-anchor
    display none
#hidden-anchor
    display none
#result-canvas
    display none

.save-list
    position fixed
    right 40px
    bottom 80px
    ul
        list-style none
        li
            line-height 34px
            font-size 22px
            font-weight bold
            text-align center
            width 36px
            height 36px
            border-radius 18px
            border 2px solid black
            margin-bottom 5px
            background-color white
            color black
            &.active
                background-color black
                color white
            &:hover
                background-color white
                color black
</style>
