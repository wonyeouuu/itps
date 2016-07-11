<style lang="scss" scoped>
    .btn-group-container {
        position: fixed;
        left: 15%;
        top: 0;
        .btn-group {
            list-style-type: none;
            position: absolute;
            top: 0;
            right: 0;
            li {
                position: relative;
                margin: 2.5vw 0;
                .btn-circle {
                    width: 6vw;
                    height: 6vw;
                    font-size: 3vw;
                    font-weight: 200;
                    border-radius: 50%;
                    border: 1px black solid;
                    background-color: black;
                    color: white;
                    &:hover {
                         background-color: white;
                         color: black;
                    }
                }
                span {
                    position: absolute;
                    white-space: nowrap;
                    font-size: 1vw;
                    left: 115%;
                    bottom: 35%;
                    font-weight: 200;
                }
            }
        }
    }
</style>

<template>
    <div class="btn-group-container">
        <ul class="btn-group">
            <li>
                <button
                    class="btn-circle btn"
                    v-on:mouseenter="hover('I', true)"
                    v-on:mouseleave="hover('I', false)"
                    @click="route(this.urls.I)"
                >I</button>
                <span v-cloak v-show="showI">TPS</span>
            </li>
            <li>
                <button
                    class="btn-circle btn"
                    v-on:mouseenter="hover('H', true)"
                    v-on:mouseleave="hover('H', false)"
                    @click="route(this.urls.H)"
                >H</button>
                <span v-cloak v-show="showH">OW TO USE?</span>
            </li>
            <li>
                <button
                    id='btn-about'
                    class="btn-circle btn"
                    v-on:mouseenter="hover('A', true)"
                    v-on:mouseleave="hover('A', false)"
                    @click='aboutShowToggle()'
                >A</button>
                <span v-cloak v-show="showA">BOUT US</span>
            </li>
        </ul>
    </div>
</template>


<script>
import { aboutShowToggle } from '../vuex/actions'
    export default {
        el: '.btn-group',
        props: ['urls'],
        vuex: {
            actions: {
                aboutShowToggle
            }
        },
        data() {
            "use strict";
            return {
                showI: false,
                showH: false,
                showA: false
            }
        },
        methods: {
            hover(target, status) {
                "use strict";
                switch(target) {
                    case "I":
                        this.showI = status;
                        break;
                    case "H":
                        this.showH = status;
                        break;
                    case "A":
                        this.showA = status;
                        break;
                }
            },
            route(url) {
                window.location = url;
            }
        }
    };
</script>
