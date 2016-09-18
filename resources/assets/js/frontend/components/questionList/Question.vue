<style rel="stylesheet/scss" lang="sass" scoped>
    $teethSelected: #C4E1D4;
    $tableBackground: lighten(lightgray, 50%);
    .question-container {
        margin: 0 0 30px 20px;
        h1 {
            font-size: 20px;
            margin: 0;
            font-weight: 200;
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
                }
                .circle--selected {
                    background-color: $teethSelected;
                    border: 2px solid black;
                }
                .circle--invisible {
                    visibility: hidden;
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
        <div class="table-normal" v-show="tableShow">
            <div class="row-top teeth-row">
                <div class="row-top-left col-xs-6 rtl">
                    <div
                        v-for="tooth in teeth.slice(0,8)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
                </div>
                <div class="row-top-right col-xs-6 ltr">
                    <div
                        v-for="tooth in teeth.slice(8,16)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="row-bottom-right col-xs-6 rtl">
                    <div
                        v-for="tooth in teeth.slice(24,32)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
                </div>
                <div class="row-bottom-left col-xs-6 ltr">
                    <div
                        v-for="tooth in teeth.slice(16,24)"
                        class="circle"
                        v-bind:class="{ 'circle--selected': tooth.selected, 'circle--invisible': !tooth.selectable }"
                        @click="teethToggle(number, tooth.id, !tooth.selected)"
                    >{{ tooth.id }}</div>
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
            'teeth',
            'tableShow'
        ],
        vuex: {
            actions: {
                tableShowToggle,
                teethToggle
            }
        },
    };
</script>
