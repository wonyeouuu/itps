<style rel="stylesheet/scss" lang="sass" scoped>
$teethColor: #ffffda;
$BOPColor: #ffdddd;
$plaqueColor: #eeeeff;
.chart-container {
    margin-left: 20px;
}

.period-chart {
    width: 1000px;
    table-layout: fixed;
    border: none;
    td, th {
        border: 2px solid black;
        font-size: 10px;
        text-align: center;
    }
    tr {
        td {
            height: 18px;
            &.vertical {
                font-style: italic;
                -moz-transform: rotate(-90deg);
                -o-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
            }
            &.width185 {
                width: 185px;
            }
            &.align-center {
                text-align: center;
                white-space: nowrap;
            }
        }
        &.teeth {
            td {
                background-color: $teethColor;
            }
        }
        &.BOP-up {
            td:not(:first-child) {
                background-color: $BOPColor;
            }
        }
        &.BOP {
            td {
                background-color: $BOPColor;
            }
        }
        &.plaque {
            td {
                background-color: $plaqueColor;
            }
        }
    }
}

.border-none {
    border: none !important;
}

h1 {
    font-size: 20px;
    margin: 0 0 20px 0;
    font-weight: 200;
}
</style>

<template>
    <div class="chart-container">
    <h1>
        {{ number }}. {{ title }}
    </h1>
    <table class='period-chart' border='1'>
        <tbody>
        <tr>
            <td colspan='2' class='align-center width185'>Mobility</td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
        </tr>
        <tr>
            <td colspan='2' rowspan="2" class='align-center'>Furcation</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan='3'></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan='3'></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan='3'></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td colspan='3'></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan='3'></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class='BOP-up'>
            <td rowspan='3' class='vertical align-center'>Buccal</td>
            <td class='align-center'>BOP</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class='plaque'>
            <td class='align-center'>Plaque??</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td class='align-center'>Probing Depth</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class='teeth'>
            <td colspan='2'>Teeth</td>
            <td colspan='3'>18</td>
            <td colspan='3'>17</td>
            <td colspan='3'>16</td>
            <td colspan='3'>15</td>
            <td colspan='3'>14</td>
            <td colspan='3'>13</td>
            <td colspan='3'>12</td>
            <td colspan='3'>11</td>
            <td colspan='3'>21</td>
            <td colspan='3'>22</td>
            <td colspan='3'>23</td>
            <td colspan='3'>24</td>
            <td colspan='3'>25</td>
            <td colspan='3'>26</td>
            <td colspan='3'>27</td>
            <td colspan='3'>28</td>
        </tr>
        <tr>
            <td rowspan='3' class='vertical align-center'>Lingual</td>
            <td class='align-center'>Probing Depth</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class='plaque'>
            <td class='align-center'>Plaque??</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class='BOP'>
            <td class='align-center'>BOP</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>

    <table class='period-chart' border='1'>
        <tbody>
            <tr class='border-none'>
                <td colspan='2' class='align-center width185 border-none'></td>
                <td colspan='48' class='border-none'></td>
            </tr>
            <tr>
                <td rowspan='3' class='vertical align-center'>Lingual</td>
                <td class='align-center'>Probing Depth</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class='plaque'>
                <td class='align-center'>Plaque??</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class='BOP'>
                <td class='align-center'>BOP</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class='teeth'>
                <td colspan='2'>Teeth</td>
                <td colspan='3'>48</td>
                <td colspan='3'>47</td>
                <td colspan='3'>46</td>
                <td colspan='3'>45</td>
                <td colspan='3'>44</td>
                <td colspan='3'>43</td>
                <td colspan='3'>42</td>
                <td colspan='3'>41</td>
                <td colspan='3'>31</td>
                <td colspan='3'>32</td>
                <td colspan='3'>33</td>
                <td colspan='3'>34</td>
                <td colspan='3'>35</td>
                <td colspan='3'>36</td>
                <td colspan='3'>37</td>
                <td colspan='3'>38</td>
            </tr>
            <tr>
                <td rowspan='3' class='vertical align-center'>Buccal</td>
                <td class='align-center'>Probing Depth</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class='plaque'>
                <td class='align-center'>Plaque??</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class='BOP'>
                <td class='align-center'>BOP</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan='2' rowspan="2" class='align-center'>Furcation</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan='3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan='3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan='3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td colspan='3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan='2' class='align-center width185'>Mobility</td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
                <td colspan='3'></td>
            </tr>
        </tbody>
    </table>
    </div>
    <div style='height: 100px;'>

    </div>

</template>

<script type="text/babel">
    export default {
        props: [
            'number',
            'title'
        ]
    }
</script>
