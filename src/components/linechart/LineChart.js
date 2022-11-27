
import React from 'react';
import { Line } from 'react-chartjs-2';




const MyLineChart = ({ data }) => {

    return (
        <div>
            <Line type="line" options={options} data={data} />
        </div>
    );
};


const options = {
    fill: true,
    fontSize: '10%',
    scales: {
        y:
        {
            min: 0,
            max: 100,
            stepSize: 10,
        },
    }
}


export default MyLineChart;