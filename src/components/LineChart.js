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

    console.log("in MyLineChart ", data);
    return (
        <div>
            <Line type="line" data={data} />
        </div>
    );
};





export default MyLineChart;