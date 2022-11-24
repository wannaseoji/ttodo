import React from 'react';
//import { LineChart } from 'recharts';
import MyBarCharts from '../barchart/BarChart.js';

export default function ProgressSlide({ data = [] }) {


    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <MyBarCharts data={data} />
            </div>

        </>

    );

}

