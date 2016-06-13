import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    questions: {
        q1: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q2: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q3: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q4: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q5: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q6: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q7: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q8: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q9: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        },
        q10: {
            show: false,
            selected: {
                tl: {
                    11: false,
                    12: false,
                    13: false,
                    14: false,
                    15: false,
                    16: false,
                    17: false,
                    18: false
                },
                tr: {
                    21: false,
                    22: false,
                    23: false,
                    24: false,
                    25: false,
                    26: false,
                    27: false,
                    28: false
                },
                br: {
                    31: false,
                    32: false,
                    33: false,
                    34: false,
                    35: false,
                    36: false,
                    37: false,
                    38: false
                },
                bl: {
                    41: false,
                    42: false,
                    43: false,
                    44: false,
                    45: false,
                    46: false,
                    47: false,
                    48: false
                }
            }
        }
    }

};

const mutations = {

};


export default Vuex.Store({
    state,
    mutations
})


