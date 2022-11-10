// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bullet
import { ResponsiveBullet } from '@nivo/bullet'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyBarCharts = ({ data /* see data tab */ }) => (
    <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={37}
        titleAlign="start"
        titleOffsetX={-70}
        rangeBorderColor={{ from: 'color', modifiers: [] }}
        measureBorderColor="#000000"
        measureSize={0.45}
        markerSize={0}
        rangeColors="nivo"
        measureColors="blues"
        markerColors="paired"
    />
)
export default MyBarCharts;