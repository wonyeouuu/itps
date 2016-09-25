<style rel="stylesheet/scss" lang="sass" scoped>
    $teethSelected: #C4E1D4;
    $tableBackground: lighten(lightgray, 50%);
    .question-container {
        margin: 0 0 30px 20px;
        h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 200;
            &.sub-title {
                margin-left: 10px;
                margin-top: 10px;
            }
        }
    }
    .circle {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 2px dotted black;
        text-align: center;
        line-height: 36px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        &.circle--translate-y_15 {
            top: -15px;
        }
        &.circle--blue {
            background: blue;
            color: white;
            &:hover {
                background: blue;
                color: white;
            }
        }
        &:hover {
            background-color: lighten($teethSelected, 10%);
        }
        .floating-circle {
            position: absolute;
            z-index: 100;
            &:nth-child(1) {
                top: -34px;
                left: -2px;
            }
            &:nth-child(2) {
                top: 28px;
                left: -2px;
            }
            &.floating-circle--blue {
                background-color: blue;
                color: white;
            }
            &.floating-circle--white {
                background-color: white;
                color: black;
                border: 2px solid black;
            }
        }
    }
    .circle--selected {
        background-color: $teethSelected;
        border: 2px solid black;
    }
    .circle--invisible {
        visibility: hidden;
    }

    .table-trigger {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background-color: lightgrey;
        position: relative;
        top: 3px;
        &:hover {
            background-color: lighten(black, 20%);
        }
    }
    .table-trigger--selected {
        background-color: black;
    }

    .table-normal {
        width: 800px;
        height: 120px;
        margin: 10px 0 0 30px;
        background-color: $tableBackground;
        border-radius: 18px;
        border: 3px black solid;
        .teeth-row {
            height: 50%;
            .rtl {
                flex-direction: row-reverse;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            .ltr {
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            .col-xs-6 {
                height: 100%;
            }
            .col-xs-12 {
                height: 50%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 12px;
                font-weight: 700;
            }
            .connector-row {
                height: 50%;
                display: flex;
                align-items: flex-start;
                justify-content: space-around;
                font-size: 6px;
                font-weight: 700;
                width: 89%;
                margin: 0 auto;
                .circle--small {
                    width: 20px;
                    height: 20px;
                    border-radius: 10px;
                    border: 1px solid black;
                    text-align: center;
                    line-height: 18px;
                    font-size: 18px;
                    font-weight: 700;
                    &:hover {
                        background-color: lighten($teethSelected, 10%);
                    }
                }
                .circle--selected {
                    background-color: $teethSelected;
                    border: 1px solid black;
                }
                .circle--invisible {
                    visibility: hidden;
                }
            }
        }
    }

    .bounce-transition {
      display: inline-block;
    }
    .bounce-enter {
      animation: bounce-in .5s;
    }
    .bounce-leave {
        display: none;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
</style>

<template>
    <div class="question-container">
        <h1>
            {{ number }}. {{ title }}
            <span
                class="table-trigger"
                :class="{ 'table-trigger--selected': tableShow }"
                @click="tableShowToggle(number)"
            ></span>
            <question-mark
                text='Vitality (Conditions of the pulp) is classified by:<br><br>
                      O or Unselected: Vital<br>
                      ∆: Endodontic treated ( Filled with Gutta-Percha )<br>
                      X: Necrosis'
            >
            </question-mark>
        </h1>
        <div class="table-normal" v-show="tableShow">
            <div class="row-top teeth-row">
                <div class="row-top-left col-xs-6 rtl">
                    <div
                        v-for="tooth in data.slice(0,8)"
                        class="circle"
                        v-bind:class="{ 'circle--blue': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle10(tooth.id, !(tooth.selectShow.circle || tooth.selectShow.times || tooth.selectShow.triangle))"
                    >
                        {{ tooth.selected ? selectedMapper(tooth.selected) : tooth.id }}
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.times'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "times")'
                        >X</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.triangle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "triangle")'
                        >∆</div>
                        <div class="circle floating-circle floating-circle--blue"
                            v-show="showX(tooth.selectShow)"
                            transition='bounce'
                            @click="vitalityToggle(tooth.id, false)"
                        >O</div>
                    </div>
                </div>
                <div class="row-top-right col-xs-6 ltr">
                    <div
                        v-for="tooth in data.slice(8,16)"
                        class="circle"
                        v-bind:class="{ 'circle--blue': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle10(tooth.id, !(tooth.selectShow.circle || tooth.selectShow.times || tooth.selectShow.triangle))"
                    >
                        {{ tooth.selected ? selectedMapper(tooth.selected) : tooth.id }}
                        <div class='circle floating-circle floating-circle--blue floating-circle--circle'
                            v-if='tooth.selectShow.circle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "circle")'
                        >O</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.times'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "times")'
                        >X</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.triangle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "triangle")'
                        >∆</div>
                        <div class="circle floating-circle floating-circle--white"
                            v-show="showX(tooth.selectShow)"
                            transition='bounce'
                            @click="vitalityToggle(tooth.id, false)"
                        >X</div>
                    </div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="row-bottom-right col-xs-6 rtl">
                    <div
                        v-for="tooth in data.slice(24,32)"
                        class="circle"
                        v-bind:class="{ 'circle--blue': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle10(tooth.id, !(tooth.selectShow.circle || tooth.selectShow.times || tooth.selectShow.triangle))"
                    >
                        {{ tooth.selected ? selectedMapper(tooth.selected) : tooth.id }}
                        <div class='circle floating-circle floating-circle--blue floating-circle--circle'
                            v-if='tooth.selectShow.circle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "circle")'
                        >O</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.times'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "times")'
                        >X</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.triangle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "triangle")'
                        >∆</div>
                        <div class="circle floating-circle floating-circle--white"
                            v-show="showX(tooth.selectShow)"
                            transition='bounce'
                            @click="vitalityToggle(tooth.id, false)"
                        >X</div>
                    </div>
                </div>
                <div class="row-bottom-left col-xs-6 ltr">
                    <div
                        v-for="tooth in data.slice(16, 24)"
                        class="circle"
                        v-bind:class="{ 'circle--blue': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle10(tooth.id, !(tooth.selectShow.circle || tooth.selectShow.times || tooth.selectShow.triangle))"
                    >
                        {{ tooth.selected ? selectedMapper(tooth.selected) : tooth.id }}
                        <div class='circle floating-circle floating-circle--blue floating-circle--circle'
                            v-if='tooth.selectShow.circle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "circle")'
                        >O</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.times'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "times")'
                        >X</div>
                        <div class='circle floating-circle floating-circle--blue'
                            v-if='tooth.selectShow.triangle'
                            transition='bounce'
                            @click='vitalityToggle(tooth.id, "triangle")'
                        >∆</div>
                        <div class="circle floating-circle floating-circle--white"
                            v-show="showX(tooth.selectShow)"
                            transition='bounce'
                            @click="vitalityToggle(tooth.id, false)"
                        >X</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
import QuestionMark from '../QuestionMark.vue'
import { getTeethWithQuestion } from '../../vuex/getters'
import { tableShowToggle, selectShowToggle10, vitalityToggle } from '../../vuex/actions'

export default {
    el: '.question-container',
    components: { QuestionMark },
    props: [
        'number',
        'title',
        'data',
        'tableShow'
    ],
    vuex: {
        actions: {
            tableShowToggle,
            vitalityToggle,
            selectShowToggle10
        }
    },
    methods: {
        showX(selectShow) {
            return Object.values(selectShow).filter(item => item).length === 1
        },
        selectedMapper(selected) {
            switch (selected) {
                case 'circle':
                    return 'O'
                    break
                case 'times':
                    return 'X'
                    break
                case 'triangle':
                    return '∆'
                    break
            }
        }
    }
};
</script>
