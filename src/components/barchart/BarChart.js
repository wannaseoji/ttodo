// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bullet

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, } from 'recharts'

const MyBarCharts = ({ data }) => {
    // console.log(data)

    return (
        <>
            {/* <h2>{data[0].month}</h2> */}
            <ResponsiveContainer width='100%' height={'120%'} aspect={4.0 / 4.0} >
                <BarChart data={data} layout="vertical" fill="#B7B7B7" width={60} height={20} margin={{ top: 0, left: 40, right: 0, bottom: 0 }}>
                    <XAxis type="number" dataKey="maxPercent" hide />
                    <YAxis dataKey="name" reversed type="category" />
                    <Tooltip />
                    <Legend title={data.month} />
                    <Bar radius={[0, 8, 0, 8]} legendType="category" barSize={30} dataKey="percent" fill="#FF9AB5" />
                </BarChart>
            </ResponsiveContainer></>);
}
export default MyBarCharts;