import React from 'react';
import Chart from 'react-google-charts';

// import { Container } from './styles';

export const GoogleChartsBar = () => {
  return (
    <div>
      <Chart
        width={400}
        height={350}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['City', '2010 Population', '2000 Population'],
          ['JAN', 8175000, 8008000],
          ['FEV', 3792000, 3694000],
          ['MAR', 2695000, 2896000],
          ['APR', 2099000, 1953000],
          ['MAY', 1526000, 1517000],
          ['JUN', 3792000, 3694000],
          ['JUL', 2695000, 2896000],
          ['AGO', 2099000, 1953000],
          ['SEP', 1526000, 1517000],
          ['OCT', 3792000, 3694000],
          ['NOV', 2695000, 2896000],
          ['DEC', 2099000, 1953000],
        ]}
        options={{
          legend: 'none',
          chartArea: { width: '90%' },
          hAxis: {
            minValue: 0,
            color: '#fff',

          },
          isStacked: true,
          backgroundColor: '#1B1B1B',
        }}
        legendToggle
      />
    </div>
  )
}

export const GoogleChartArea = () => {
  return (
    <div>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'number', label: 'x' },
            { type: 'number', label: 'values' },
            { id: 'i0', type: 'number', role: 'interval' },
            { id: 'i1', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
            { id: 'i2', type: 'number', role: 'interval' },
          ],
          [1, 100, 90, 110, 85, 96, 104, 120],
          [2, 120, 95, 130, 90, 113, 124, 140],
          [3, 130, 105, 140, 100, 117, 133, 139],
          [4, 90, 85, 95, 85, 88, 92, 95],
          [5, 70, 74, 63, 67, 69, 70, 72],
          [6, 30, 39, 22, 21, 28, 34, 40],
          [7, 80, 77, 83, 70, 77, 85, 90],
          [8, 100, 90, 110, 85, 95, 102, 110],
        ]}
        options={{
          chartArea: { width: '90%' },
          title: 'Line intervals, default',
          curveType: 'function',
          lineWidth: 4,
          intervals: { style: 'line' },
          legend: 'none',
          backgroundColor: '#1B1B1B',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export const GoogleChartDonut = () => {
  return (
    <Chart
      width={'300px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]}
      options={{
        legend: 'none',
        title: 'My Daily Activities',
        chartArea: { width: '90%' },
        // Just add this option
        pieHole: 0.67,
        backgroundColor: '#1B1B1B',
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  )
}