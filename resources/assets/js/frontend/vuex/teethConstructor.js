import _ from 'lodash'

export const connectorsSplit = () => {
    return [
        [18, 17],
        [17, 16],
        [16, 15],
        [15, 14],
        [14, 13],
        [13, 12],
        [12, 11],
        [11, 21],
        [21, 22],
        [22, 23],
        [23, 24],
        [24, 25],
        [25, 26],
        [26, 27],
        [27, 28],
        [37, 38],
        [36, 37],
        [35, 36],
        [34, 35],
        [33, 34],
        [32, 33],
        [31, 32],
        [41, 31],
        [42, 41],
        [43, 42],
        [44, 43],
        [45, 44],
        [46, 45],
        [47, 46],
        [48, 47]
    ]
}
export const connectors = () => connectorsSplit().map(connectorArr => connectorArr.reduce((carry, connector) => carry + connector))
export const teethArr = () => {
    let teeth = []
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.push({
                id: `${digit10}${digit1}`,
                selected: false,
                selectable: true
            })
        })
    })
    return teeth
}
export const teethArr10 = () => {
    let teeth = []
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.push({
                id: `${digit10}${digit1}`,
                selected: false,
                selectable: true,
                selectShow: {
                    circle: false,
                    times: false,
                    triangle: false
                }
            })
        })
    })
    return teeth
}
export const teethArr4 = () => {
    "use strict";
    let teeth = {
        a: [],
        b: []
    }
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.a.push({
                id: `${digit10}${digit1}`,
                selected: false,//can be true, p, m
                selectable: true,
                selectShow: {
                    p: false,
                    m: false
                }
            })
        })
    })

    connectors().forEach(function(connector) {
        teeth.b.push({
            id: connector,
            selected: false,
            selectable: false
        })
    })
    return teeth
}

export const teethArr8 = () => {
    let teeth = {
        a: [],
        b: []
    }
    _.range(1, 5).forEach((digit10) => {
        _.range(1, 9).forEach((digit1) => {
            teeth.a.push({
                id: `${digit10}${digit1}`,
                selected: false,
                selectable: true,
            })
        })
    })

    connectors().forEach(function(connector) {
        teeth.b.push({
            id: connector,
            selected: false,
            selectable: false,
            selectShow: {
                a: false,
                w: false,
                i: false
            }
        })
    })
    return teeth
}
