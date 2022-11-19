import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';




const MyLineChart = ({ data }) => {
    // let data = {
    //     labels: ['2째주', '3재쭈', '4재쭈'],
    //     datasets: [
    //         {
    //             type: 'line',
    //             label: 'Dataset 1',
    //             borderColor: '#FF9AB5',
    //             borderWidth: 2,
    //             data: [
    //                 { x: 'January', y: 1 },
    //                 { x: 'February', y: 2 },
    //                 { x: 'March', y: 3 },
    //                 { x: 'April', y: 4 },
    //                 { x: 'May', y: 5 }
    //             ],
    //         },
    //     ]
    // };

    return (
        <div>
            <Line type="line" data={data} />
        </div>
    );
};





export default MyLineChart;