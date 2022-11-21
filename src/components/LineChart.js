
import React from 'react';
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