import * as React from 'react'
import {ResponsiveStream} from '@nivo/stream'

const data = [
  {
    "Nuclear": 105,
    "Gas": 46,
    "Coal": 169,
    "Wind": 168,
    "Solar": 36,
    "Hydro": 27
  },
  {
    "Nuclear": 69,
    "Gas": 25,
    "Coal": 29,
    "Wind": 57,
    "Solar": 64,
    "Hydro": 164
  },
  {
    "Nuclear": 176,
    "Gas": 25,
    "Coal": 92,
    "Wind": 178,
    "Solar": 32,
    "Hydro": 31
  },
  {
    "Nuclear": 152,
    "Gas": 54,
    "Coal": 159,
    "Wind": 85,
    "Solar": 123,
    "Hydro": 39
  },
  {
    "Nuclear": 16,
    "Gas": 175,
    "Coal": 119,
    "Wind": 118,
    "Solar": 107,
    "Hydro": 75
  },
  {
    "Nuclear": 182,
    "Gas": 83,
    "Coal": 66,
    "Wind": 168,
    "Solar": 125,
    "Hydro": 43
  },
  {
    "Nuclear": 13,
    "Gas": 14,
    "Coal": 142,
    "Wind": 138,
    "Solar": 176,
    "Hydro": 22
  },
  {
    "Nuclear": 131,
    "Gas": 55,
    "Coal": 196,
    "Wind": 183,
    "Solar": 46,
    "Hydro": 69
  },
  {
    "Nuclear": 30,
    "Gas": 62,
    "Coal": 118,
    "Wind": 46,
    "Solar": 51,
    "Hydro": 134
  }
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function ExampleGraph() {
  return (
    <div style={{height: 500, marginTop: 40, marginBottom: 40}}>
      <ResponsiveStream
        data={data}
        keys={['Nuclear', 'Gas', 'Coal', 'Wind', 'Solar', 'Hydro']}
        margin={{right: 85, left: 30}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36
        }}
        axisLeft={{orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40}}
        offsetType="silhouette"
        colors={{scheme: 'nivo'}}
        fillOpacity={0.85}
        borderColor={{theme: 'background'}}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#2c998f',
            size: 4,
            padding: 2,
            stagger: true
          },
          {
            id: 'squares',
            type: 'patternSquares',
            background: 'inherit',
            color: '#e4c912',
            size: 6,
            padding: 2,
            stagger: true
          }
        ]}
        fill={[
          {
            match: {
              id: 'Solar'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'Coal'
            },
            id: 'squares'
          }
        ]}
        dotSize={8}
        dotColor={{from: 'color'}}
        dotBorderWidth={2}
        dotBorderColor={{from: 'color', modifiers: [['darker', 0.7]]}}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000'
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}
