import React from 'react';
//import { LineChart } from 'recharts';
import MyLineChart from './LineChart.js';
import MyResponsivePie from './piechart/Chart.js'


const data = [
    {
        "id": "japan",
        "color": "hsl(217, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 174
            },
            {
                "x": "helicopter",
                "y": 262
            },
            {
                "x": "boat",
                "y": 208
            },
            {
                "x": "train",
                "y": 187
            },
            {
                "x": "subway",
                "y": 210
            },
            {
                "x": "bus",
                "y": 282
            },
            {
                "x": "car",
                "y": 22
            },
            {
                "x": "moto",
                "y": 132
            },
            {
                "x": "bicycle",
                "y": 127
            },
            {
                "x": "horse",
                "y": 239
            },
            {
                "x": "skateboard",
                "y": 219
            },
            {
                "x": "others",
                "y": 246
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(34, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 250
            },
            {
                "x": "helicopter",
                "y": 40
            },
            {
                "x": "boat",
                "y": 154
            },
            {
                "x": "train",
                "y": 145
            },
            {
                "x": "subway",
                "y": 163
            },
            {
                "x": "bus",
                "y": 72
            },
            {
                "x": "car",
                "y": 77
            },
            {
                "x": "moto",
                "y": 90
            },
            {
                "x": "bicycle",
                "y": 40
            },
            {
                "x": "horse",
                "y": 267
            },
            {
                "x": "skateboard",
                "y": 208
            },
            {
                "x": "others",
                "y": 191
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(315, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 109
            },
            {
                "x": "helicopter",
                "y": 197
            },
            {
                "x": "boat",
                "y": 71
            },
            {
                "x": "train",
                "y": 69
            },
            {
                "x": "subway",
                "y": 168
            },
            {
                "x": "bus",
                "y": 71
            },
            {
                "x": "car",
                "y": 166
            },
            {
                "x": "moto",
                "y": 21
            },
            {
                "x": "bicycle",
                "y": 80
            },
            {
                "x": "horse",
                "y": 42
            },
            {
                "x": "skateboard",
                "y": 158
            },
            {
                "x": "others",
                "y": 70
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(204, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 158
            },
            {
                "x": "helicopter",
                "y": 214
            },
            {
                "x": "boat",
                "y": 116
            },
            {
                "x": "train",
                "y": 226
            },
            {
                "x": "subway",
                "y": 263
            },
            {
                "x": "bus",
                "y": 133
            },
            {
                "x": "car",
                "y": 170
            },
            {
                "x": "moto",
                "y": 221
            },
            {
                "x": "bicycle",
                "y": 9
            },
            {
                "x": "horse",
                "y": 44
            },
            {
                "x": "skateboard",
                "y": 190
            },
            {
                "x": "others",
                "y": 216
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(324, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 256
            },
            {
                "x": "helicopter",
                "y": 40
            },
            {
                "x": "boat",
                "y": 8
            },
            {
                "x": "train",
                "y": 236
            },
            {
                "x": "subway",
                "y": 93
            },
            {
                "x": "bus",
                "y": 295
            },
            {
                "x": "car",
                "y": 174
            },
            {
                "x": "moto",
                "y": 268
            },
            {
                "x": "bicycle",
                "y": 28
            },
            {
                "x": "horse",
                "y": 143
            },
            {
                "x": "skateboard",
                "y": 263
            },
            {
                "x": "others",
                "y": 35
            }
        ]
    }
]
export default function Slide({ Piedata = [], LineChartData = [] }) {
    return (
        <>

            <div style={{ width: '100%', height: '50%', }}>
                <MyResponsivePie data={Piedata} />
            </div>
            <div style={{ width: '100%', height: '50%', }}>
                <MyLineChart data={data} />
            </div>

        </>

    );

}

