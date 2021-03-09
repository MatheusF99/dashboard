import React from 'react';
import Chart from 'react-google-charts';

// import { Container } from './styles';

export const GoogleChartsBar = () => {
  return (
    <div >
      <Chart
        width={350}
        height={310}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ['City', '2010 Population', '2000 Population'],
          ['', 8175000, 8008000],
          ['', 3792000, 3694000],
          ['', 2695000, 2896000],
          ['', 2099000, 1953000],
          ['', 1526000, 1517000],
          ['', 3792000, 3694000],
          ['', 2695000, 2896000],
          ['', 2099000, 1953000],
          ['', 1526000, 1517000],
          ['', 3792000, 3694000],
          ['', 2695000, 2896000],
          ['', 2099000, 1953000],
        ]
        }
        options={{
          chartArea: { width: '90%' },
          hAxis: {
            minValue: 0,
            color: '#fff',
          },
          isStacked: true,
          backgroundColor: '#ffffff',
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
          legend: {
            labels: {
              fontColor: 'rgb(255, 99, 132)'
            }
          },
          hAxis: { titleTextStyle: { color: '#fff' } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '100%', height: '70%' },
          // lineWidth: 25
          backgroundColor: '#fff',
          fontColor: '#fff'
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
        backgroundColor: '#fff',
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  )
}

export const GoogleChartTimeline = () => {
  return (
    <Chart
      width={'100%'}
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
        //segunda
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
        //terca
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
        //quarta
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
        //quinta
        [
          'Quinta',
          'Beginning JavaScript',
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],

        [
          'Quinta',
          'Intermediate JavaScript',
          new Date(0, 0, 0, 14, 0, 0),
          new Date(0, 0, 0, 15, 30, 0),
        ],
        [
          'Quinta',
          'Advanced JavaScript',
          new Date(0, 0, 0, 16, 0, 0),
          new Date(0, 0, 0, 17, 30, 0),
        ],
        //sexta
        [
          'Sexta',
          'Beginning JavaScript',
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],

        [
          'Sexta',
          'Intermediate JavaScript',
          new Date(0, 0, 0, 14, 0, 0),
          new Date(0, 0, 0, 15, 30, 0),
        ],
        [
          'Sexta',
          'Advanced JavaScript',
          new Date(0, 0, 0, 16, 0, 0),
          new Date(0, 0, 0, 17, 30, 0),
        ],
        //sabado
        [
          'Sabado',
          'Beginning JavaScript',
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],

        [
          'Sabado',
          'Intermediate JavaScript',
          new Date(0, 0, 0, 14, 0, 0),
          new Date(0, 0, 0, 15, 30, 0),
        ],
        [
          'Sabado',
          'Advanced JavaScript',
          new Date(0, 0, 0, 16, 0, 0),
          new Date(0, 0, 0, 17, 30, 0),
        ],
      ]}
      options={{
        timeline: {
          colorByRowLabel: true,
        },
        backgroundColor: '#fff',
        text: {
          color: '#fff'
        }
      }}
      rootProps={{ 'data-testid': '5' }}
    />
  )
}