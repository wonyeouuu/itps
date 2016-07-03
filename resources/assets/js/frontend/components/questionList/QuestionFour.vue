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
                margin-top: 5px;
            }
        }
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
        margin: 20px 0 0 30px;
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
                        top: -60px;
                        left: -2px;
                    }
                    &.circle-m {
                        background-color: blue;
                        color: white;
                        position: relative;
                        top: -56px;
                        left: -2px;
                    }
                }
                .circle--selected {
                    background-color: $teethSelected;
                    border: 2px solid black;
                }
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
      animation: bounce-out .5s;
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
        </h1>
        <!--table a-->
        <h1 class='sub-title' v-show="tableShow">a. Crown</h1>
        <div class="table-normal" v-show="tableShow">
            <div class="row-top teeth-row">
                <div class="row-top-left col-xs-6 rtl">
                    <div
                        v-for="tooth in data.a.slice(0,8)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        v-show='tooth.selectable'
                        @click='selectShow = !selectShow'
                    >
                    {{ tooth.id }}
                        <div class="circle circle-p"
                            v-show='selectShow'
                            transition='bounce'
                        >P</div>
                        <div class="circle circle-m"
                            v-show='selectShow'
                            transition='bounce'
                        >M</div>
                    </div>
                </div>
                <div class="row-top-right col-xs-6 ltr">
                    <div
                        v-for="tooth in data.a.slice(8,16)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        @click="teethToggle4(tooth.id, !tooth.selected)"
                        v-show='tooth.selectable'
                    >{{ tooth.id }}</div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="row-bottom-left col-xs-6 rtl">
                    <div
                        v-for="tooth in data.a.slice(16,24)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        @click="teethToggle4(tooth.id, !tooth.selected)"
                        v-show='tooth.selectable'
                    >{{ tooth.id }}</div>
                </div>
                <div class="row-bottom-right col-xs-6 ltr">
                    <div
                        v-for="tooth in data.a.slice(24,32)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        @click="teethToggle4(tooth.id, !tooth.selected)"
                        v-show='tooth.selectable'
                    >{{ tooth.id }}</div>
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
                        v-bind:class="{ 'circle--selected': connector.selected }"
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
                        v-bind:class="{ 'circle--selected': connector.selected }"
                        v-for="connector in data.b.slice(15,30)"
                        @click="connectorToggle(connector.id, !connector.selected)"
                    >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import { getTeethWithQuestion } from '../../vuex/getters'
    import { tableShowToggle } from '../../vuex/actions'
    import { teethToggle4, connectorToggle } from '../../vuex/actions'
    export default {
        el: '.question-container',
        props: [
            'number',
            'title',
            'data',
            'tableShow'
        ],
        data() {
            return {
                selectShow: false
            }
        },
        ready() {
        },
        methods: {
            selectShow() {
                this.selectShow = !this.selectShow
            }
        },
        vuex: {
            actions: {
                tableShowToggle,
                teethToggle4,
                connectorToggle
            }
        }
    };
</script>
