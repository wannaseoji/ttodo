import { ResponsivePie } from '@nivo/pie'
import React from 'react';


const MyResponsivePie = ({ data }) => (

    <ResponsivePie
        data={data}
        margin={{ top: 60, right: 80, bottom: 10 , left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={['#f768a1', '#d0d0d0']}
        borderWidth={4}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        theme={{
            /**
             * label style (pad에 표현되는 글씨)
             */
            labels: {
                text: {
                    fontSize: 0, //11-17
                    fill: '#000000',
                },
            },
            /**
             * legend style (default로 하단에 있는 색상별 key 표시)
             */
            legends: {
                text: {
                    fontSize: 15,
                    fontStyle: 'bold',
                    fill: '#000000',
                },
            },
        }}
        enableArcLabels={false}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor={{ from: 'rgba(255, 255, 255, 0.3)', modifiers: [] }}
        arcLinkLabelsTex
        arcLinkLabelsThickness={5}
        arcLinkLabelsColor={{ from: 'rgba(255, 255, 255, 0.3)', modifiers: [] }}
        arcLinkLabelsDiagonalLength={0}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    5
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: "#f768a1", //배경색
                color: '#f768a1',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: '#eeeeee',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[ //채우기 속성
            {
                match: {
                    id: '완료'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '미완료'
                },
                id: 'lines',

            },

        ]}
        legends={[
            {

                anchor: 'top-left',
                direction: 'column', //차트아래에 표시되는것
                justify: false,
                translateX: -75,
                translateY: -55,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 30,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                // textSize: ,
                fontSize: 25,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

)

export default MyResponsivePie;