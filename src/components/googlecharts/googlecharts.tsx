import React from 'react';
import Chart from 'react-google-charts';

// import { Container } from './styles';

export const GoogleChartsBar = () => {
  return (
    <div>
      <Chart
        width={300}
        height={310}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
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
        ]
        }
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
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Year', 'Sales', 'Expenses', 'Revenue'],
          ['2013', 1000, 400, 200],
          ['2014', 1170, 460, 300],
          ['2015', 660, 1120, 800],
          ['2016', 1030, 540, 100],
          ['2017', 1000, 400, 200],
          ['2018', 1170, 460, 300],
          ['2019', 660, 1120, 800],
          ['2020', 1030, 540, 100],
        ]}
        options={{
          legend: 'none',
          hAxis: { titleTextStyle: { color: '#333' } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '100%', height: '70%' },
          // lineWidth: 25
          backgroundColor: '#1B1B1B',
          text: 'Color'
        }}
        // For tests
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
      loader={<div>Loading Chart...</div>}
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
        chartArea: { width: '90%' },
        // Just add this option
        pieHole: 0.67,
        backgroundColor: '#1B1B1B',
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  )
}

export const GoogleChartTimeline = () => {
  return (
    <Chart
      width={'97.5%'}
      height={'200px'}
      chartType="Timeline"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', id: 'Room' },
          { type: 'string', id: 'Name' },

          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' },
        ],
        [
          'Segunda',
          'Beginning JavaScript',
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],

        [
          'Segunda',
          'Intermediate JavaScript',
          new Date(0, 0, 0, 14, 0, 0),
          new Date(0, 0, 0, 15, 30, 0),
        ],
        [
          'Segunda',
          'Advanced JavaScript',
          new Date(0, 0, 0, 16, 0, 0),
          new Date(0, 0, 0, 17, 30, 0),
        ],
        [
          'Terça',
          'Beginning Google Charts',
          new Date(0, 0, 0, 8, 30, 0),
          new Date(0, 0, 0, 10, 0, 0),
        ],
        [
          'Terça',
          'Intermediate Google Charts',
          new Date(0, 0, 0, 14, 30, 0),
          new Date(0, 0, 0, 16, 0, 0),
        ],
        [
          'Terça',
          'Advanced Google Charts',
          new Date(0, 0, 0, 16, 30, 0),
          new Date(0, 0, 0, 18, 0, 0),
        ],
        [
          'Quarta',
          'Beginning JavaScript',
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],

        [
          'Quarta',
          'Intermediate JavaScript',
          new Date(0, 0, 0, 14, 0, 0),
          new Date(0, 0, 0, 15, 30, 0),
        ],
        [
          'Quarta',
          'Advanced JavaScript',
          new Date(0, 0, 0, 16, 0, 0),
          new Date(0, 0, 0, 17, 30, 0),
        ],
      ]}
      options={{
        timeline: {
          colorByRowLabel: true,
        },
        backgroundColor: '#1B1B1B',
      }}
      rootProps={{ 'data-testid': '5' }}
    />
  )
}