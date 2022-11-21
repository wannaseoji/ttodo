// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bullet

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'

const MyBarCharts = ({ data }) => {
    // console.log(data)

    return (
        <>
            {/* <h2>{data[0].month}</h2> */}
            <ResponsiveContainer width='100%' aspect={4.0 / 4.0} >
                <BarChart data={data} layout="vertical" fill="#B7B7B7" width={60} height={20}>
                    <XAxis type="number" dataKey="maxPercent" hide />
                    <YAxis dataKey="name" reversed type="category" />
                    <Tooltip />
                    <Legend title={data.month} />
                    <Bar legendType="category" barSize={40} dataKey="percent" fill="#FF9AB5" />
                </BarChart>
            </ResponsiveContainer></>);
}
export default MyBarCharts;