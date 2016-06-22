<style rel="stylesheet/scss" lang="sass" scoped>
    $teethSelected: #C4E1D4;
    $tableBackground: lighten(lightgray, 50%);
    .question-container {
        margin: 0 0 30px 20px;
        h1 {
            margin: 0;
            font-size: 2vw;
            font-weight: 200;
            //added
            &.sub-title {
                margin-left: 1vw;
                margin-top: 1vh;
            }
        }
    }

    .table-trigger {
        display: inline-block;
        width: 2vw;
        height: 2vw;
        border-radius: 0.5vw;
        background-color: lightgrey;
        position: relative;
        top: 0.5vw;
        &:hover {
            background-color: lighten(black, 20%);
        }
    }
    .table-trigger--selected {
        background-color: black;
    }

    .table-normal {
        width: 64vw;
        height: 10vw;
        margin: 20px 0 0 2vw;
        background-color: $tableBackground;
        border-radius: 1.5vw;
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
                    width: 3vw;
                    height: 3vw;
                    border-radius: 1.5vw;
                    border: 2px dotted black;
                    text-align: center;
                    line-height: 2.8vw;
                    font-size: 1.5vw;
                    font-weight: 700;
                    &:hover {
                        background-color: lighten($teethSelected, 10%);
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
                font-size: 0.75vw;
                font-weight: 700;
            }
            .connector-row {
                height: 50%;
                display: flex;
                align-items: flex-start;
                justify-content: space-around;
                font-size: 0.75vw;
                font-weight: 700;
                width: 88%;
                margin: 0 auto;
                .circle--small {
                    width: 1.5vw;
                    height: 1.5vw;
                    border-radius: 0.75vw;
                    border: 1px solid black;
                    text-align: center;
                    line-height: 1.4vw;
                    font-size: 0.75vw;
                    font-weight: 700;
                    &:hover {
                        background-color: lighten($teethSelected, 10%);
                    }
                }
                .circle--selected {
                    background-color: $teethSelected;
                    border: 2px solid black;
                }
            }
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
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
                </div>
                <div class="row-top-right col-xs-6 ltr">
                    <div
                        v-for="tooth in data.a.slice(8,16)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="row-bottom-left col-xs-6 rtl">
                    <div
                        v-for="tooth in data.a.slice(16,24)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
                </div>
                <div class="row-bottom-right col-xs-6 ltr">
                    <div
                        v-for="tooth in data.a.slice(24,32)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
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
                        v-for="connector in data.b.slice(0,15)"
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
                        v-for="connector in data.b.slice(15,30)"
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
    import { teethToggle } from '../../vuex/actions'
    export default {
        el: '.question-container',
        props: [
            'number',
            'title',
            'data',
            'tableShow'
        ],
        vuex: {
            actions: {
                tableShowToggle,
                teethToggle
            }
        }

    };
</script>

