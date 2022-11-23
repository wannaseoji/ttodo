
import React from 'react';
import { Line } from 'react-chartjs-2';




const MyLineChart = ({ data }) => {

    // console.log("in MyLineChart ", data);
    return (
        <div>
            <Line type="line" options={options} data={data} />
        </div>
    );
};


const options = {
    fill: true,
    fontSize: '10%',

}


export default MyLineChart;