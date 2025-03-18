/* eslint-disable no-unused-vars */
import TopBar from './TopBar'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function ReportsAndAnalytics() {
  const navigate = useNavigate()
  return (
    <div style={{paddingLeft:"20px"}} >
      <TopBar/>
      <Button variant='primary' onClick={()=>navigate('/status')} >Back</Button>
      <h1 style={{paddingLeft:"10px"}} >Reports And Analytics</h1>
      <div>
      <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: ['Student A', 'Student B', 'Student C', 'Student D', 'Student E'],
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 6, 4],
            },
          ]}
          width={800}
          height={300}
      />
      <div>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={800}
      height={300}
    />
      </div>
      </div>
    </div>
  )
}

export default ReportsAndAnalytics

