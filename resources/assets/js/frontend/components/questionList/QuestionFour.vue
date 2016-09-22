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
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 2px dotted black;
        text-align: center;
        line-height: 36px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            background-color: lighten($teethSelected, 10%);
        }
        &.circle-p {
            background-color: blue;
            color: white;
            position: relative;
            z-index: 100;
        }
        &.circle-p-selected {
            background-color: blue;
            color: white;
        }
        &.circle-m {
            background-color: blue;
            color: white;
            position: relative;
            z-index: 100;
        }
        &.circle-m-selected {
            background-color: blue;
            color: white;
        }
        &.circle-x {
            background-color: white;
            color: black;
            border: solid;
            position: relative;
            z-index: 100;
        }
        &.circle--top {
            top: -69px;
            left: -2px;
        }
        &.circle--bottom {
            top: -49px;
            left: -2px;
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
                text='FPD are classiIied by their appearance:<br><br>
                      M : “M” etal crowns<br>
                      P : “P”orcelain Crowns or “P”orcelain fused to metal crowns'
            ></question-mark>
        </h1>
        <!--table a-->
        <h1 class='sub-title' v-show="tableShow">a. Crown</h1>
        <div class="table-normal" v-show="tableShow">
            <div class="row-top teeth-row">
                <div class="row-top-left col-xs-6 rtl">
                    <div
                        v-for="tooth in data.a.slice(0,8)"
                        class="circle"
                        v-bind:class="{ 'circle-p-selected': tooth.selected == 'P', 'circle-m-selected': tooth.selected == 'M', 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle4(tooth.id, !(tooth.selectShow.p || tooth.selectShow.m))"
                    >
                    {{ tooth.selected ? tooth.selected : tooth.id }}
                        <div class="circle circle-p"
                            :class="{ 'circle--top': tooth.selectShow.p }"
                            v-show="tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'P')"
                        >P</div>
                        <div class="circle circle-m"
                            :class="{ 'circle--bottom': tooth.selectShow.m && tooth.selectShow.p, 'circle--top': tooth.selectShow.m && !tooth.selectShow.p }"
                            v-show="tooth.selectShow.m"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'M')"
                        >M</div>
                        <div class="circle circle-x"
                            :class="{ 'circle--bottom': tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p }"
                            v-show="tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, '')"
                        >X</div>
                    </div>
                </div>
                <div class="row-top-right col-xs-6 ltr">
                    <div
                        v-for="tooth in data.a.slice(8,16)"
                        class="circle"
                        v-bind:class="{ 'circle-p-selected': tooth.selected == 'P', 'circle-m-selected': tooth.selected == 'M', 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle4(tooth.id, !(tooth.selectShow.p || tooth.selectShow.m))"
                    >
                    {{ tooth.selected ? tooth.selected : tooth.id }}
                        <div class="circle circle-p"
                            :class="{ 'circle--top': tooth.selectShow.p }"
                            v-show="tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'P')"
                        >P</div>
                        <div class="circle circle-m"
                            :class="{ 'circle--bottom': tooth.selectShow.m && tooth.selectShow.p, 'circle--top': tooth.selectShow.m && !tooth.selectShow.p }"
                            v-show="tooth.selectShow.m"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'M')"
                        >M</div>
                        <div class="circle circle-x"
                            :class="{ 'circle--bottom': tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p }"
                            v-show="tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, '')"
                        >X</div>
                    </div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="row-bottom-right col-xs-6 rtl">
                    <div
                        v-for="tooth in data.a.slice(24,32)"
                        class="circle"
                        v-bind:class="{ 'circle-p-selected': tooth.selected == 'P', 'circle-m-selected': tooth.selected == 'M', 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle4(tooth.id, !(tooth.selectShow.p || tooth.selectShow.m))"
                    >
                    {{ tooth.selected ? tooth.selected : tooth.id }}
                        <div class="circle circle-p"
                            :class="{ 'circle--top': tooth.selectShow.p }"
                            v-show="tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'P')"
                        >P</div>
                        <div class="circle circle-m"
                            :class="{ 'circle--bottom': tooth.selectShow.m && tooth.selectShow.p, 'circle--top': tooth.selectShow.m && !tooth.selectShow.p }"
                            v-show="tooth.selectShow.m"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'M')"
                        >M</div>
                        <div class="circle circle-x"
                            :class="{ 'circle--bottom': tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p }"
                            v-show="tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, '')"
                        >X</div>
                    </div>
                </div>
                <div class="row-bottom-left col-xs-6 ltr">
                    <div
                        v-for="tooth in data.a.slice(16,24)"
                        class="circle"
                        v-bind:class="{ 'circle-p-selected': tooth.selected == 'P', 'circle-m-selected': tooth.selected == 'M', 'circle--invisible': !tooth.selectable }"
                        @click="selectShowToggle4(tooth.id, !(tooth.selectShow.p || tooth.selectShow.m))"
                    >
                    {{ tooth.selected ? tooth.selected : tooth.id }}
                        <div class="circle circle-p"
                            :class="{ 'circle--top': tooth.selectShow.p }"
                            v-show="tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'P')"
                        >P</div>
                        <div class="circle circle-m"
                            :class="{ 'circle--bottom': tooth.selectShow.m && tooth.selectShow.p, 'circle--top': tooth.selectShow.m && !tooth.selectShow.p }"
                            v-show="tooth.selectShow.m"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, 'M')"
                        >M</div>
                        <div class="circle circle-x"
                            :class="{ 'circle--bottom': tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p }"
                            v-show="tooth.selectShow.m ? !tooth.selectShow.p : tooth.selectShow.p"
                            transition='bounce'
                            @click="teethToggle4(tooth.id, '')"
                        >X</div>
                    </div>
                </div>
            </div>
        </div>
        <!--table b-->
        <h1 class='sub-title' v-show="tableShow">b. Connector</h1>
        <div class="table-normal" v-show="tableShow">
            <div class="row-top teeth-row">
                <div class="col-xs-12">
                    <div
                        v-for="teeth in ['18','17','16','15','14','13','12','11','21','22','23','24','25','26','27','28']"
                    >
                        {{ teeth }}
                    </div>
                </div>
                <div class="connector-row">
                    <div
                        class="circle--small"
                        v-bind:class="{ 'circle--selected': connector.selected, 'circle--invisible': !connector.selectable }"
                        v-for="connector in data.b.slice(0,15)"
                        @click="connectorToggle(connector.id, !connector.selected)"
                    >
                    </div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="col-xs-12">
                    <div
                        v-for="teeth in ['48','47','46','45','44','43','42','41','31','32','33','34','35','36','37','38']"
                    >
                        {{ teeth }}
                    </div>
                </div>
                <div class="connector-row">
                    <div
                        class="circle--small"
                        v-bind:class="{ 'circle--selected': connector.selected, 'circle--invisible': !connector.selectable }"
                        v-for="connector in data.b.slice(15,30).reverse()"
                        @click="connectorToggle(connector.id, !connector.selected)"
                    >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
import QuestionMark from '../QuestionMark.vue'
import { getTeethWithQuestion } from '../../vuex/getters'
import { tableShowToggle, selectShowToggle4, connectorToggle, teethToggle4 } from '../../vuex/actions'

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
            connectorToggle,
            selectShowToggle4,
            teethToggle4
        }
    }
};
</script>
