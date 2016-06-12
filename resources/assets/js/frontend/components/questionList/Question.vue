<style lang="scss" scoped>
    $teethSelected: red;
    .question-container {
        margin: 100px 0 0 20px;
        h1 {
            margin: 0;
            font-size: 2vw;
            font-weight: 200;
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
            background-color: black;
        }
    }

    .table-normal {
        width: 64vw;
        height: 10vw;
        margin: 20px 0 0 2vw;
        background-color: lightgoldenrodyellow;
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
                    border: 2px solid black;
                    text-align: center;
                    line-height: 2.8vw;
                    font-size: 1.5vw;
                    font-weight: 700;
                    &:hover {
                        background-color: $teethSelected;
                    }
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
                @click="tableShowToggle()"
            ></span>
        </h1>
        <div class="table-normal" v-show="tableShow">
            <div class="row-top teeth-row">
                <div class="row-top-left col-xs-6 rtl">
                    <div v-for="tooth in teeth.tl" class="circle">{{ tooth }}</div>
                </div>
                <div class="row-top-right col-xs-6 ltr">
                    <div v-for="tooth in teeth.tr" class="circle">{{ tooth }}</div>
                </div>
            </div>
            <div class="row-bottom teeth-row">
                <div class="row-bottom-left col-xs-6 rtl">
                    <div v-for="tooth in teeth.bl" class="circle">{{ tooth }}</div>
                </div>
                <div class="row-bottom-right col-xs-6 ltr">
                    <div v-for="tooth in teeth.br" class="circle">{{ tooth }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        el: '.question-container',
        props: [
            'number',
            'title'
        ],
        data() {
            return {
                tableShow: false,
                teeth: {
                    tl: [11, 12, 13, 14, 15, 16, 17, 18],
                    tr: [21, 22, 23, 24, 25, 26, 27, 28],
                    bl: [41, 42, 43, 44, 45, 46, 47, 48],
                    br: [31, 32, 33, 34, 35, 36, 37, 38]
                }
            }
        },
        methods: {
            tableShowToggle() {
                this.tableShow = !this.tableShow;
            }
        }

    };
</script>

