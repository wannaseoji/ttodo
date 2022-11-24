import React from 'react';
//import { LineChart } from 'recharts';
import MyBarCharts from '../barchart/BarChart.js';

export default function ProgressSlide({ data = [] }) {


    return (
        <>
            {/* <h3>{data[0] && data[0].month}</h3> */}
            <div style={{ width: '100%', height: '100%' }}>
                <MyBarCharts data={data} />
            </div>

        </>

    );

}

