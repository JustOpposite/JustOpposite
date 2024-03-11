/* eslint-disable import/no-extraneous-dependencies */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'Page A',
    a: 0,
    b: 0,
    c: 0
  },
  {
    name: 'Page B',
    a: 1000,
    b: 500,
    c: 1000
  },
  {
    name: 'Page C',
    a: 2000,
    b: 9800,
    c: 2290
  },
  {
    name: 'Page D',
    a: 2780,
    b: 3908,
    c: 2000
  },
  {
    name: 'Page E',
    a: 1890,
    b: 4800,
    c: 2181
  },
  {
    name: 'Page F',
    a: 2390,
    b: 3800,
    c: 2500
  },
  {
    name: 'Page G',
    a: 3490,
    b: 4300,
    c: 2100
  }
]

export default function RechartArea() {
  // static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341'
  return (
    <div style={{ height: '400px', width: '800px' }}>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="5 15" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="a"
            stackId="1"
            stroke="black"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="b"
            stackId="1"
            stroke="black"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="c"
            stackId="1"
            stroke="black"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
