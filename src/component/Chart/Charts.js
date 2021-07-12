import React,{useContext} from 'react'
import classes from './Chart.module.css'
import Chart from 'chart.js';
import { Line,Bar } from 'react-chartjs-2';
import {GlobalContext} from '../context/GlobalProvider'
import {Card, CardContent,Typography,Grid } from '@material-ui/core'

const Charts = () => {
    const context = useContext(GlobalContext);
const datalist=context.dailyData;
const country=context.selected
const daily=context.data
//   if (!datalist.confirmed) {
//     return 'Loading...';
//   }

 
if (!daily.confirmed) {
    return 'Loading...';
  }
const barD=<Bar data={
    {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
          data: [daily.confirmed.value,daily.recovered.value, daily.deaths.value],
          label: 'People',
          backgroundColor: [ 'rgb(199, 219, 20)', '#64ed6f' , '#f30000']
        
        }
        ],
    }}  
    options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}    
     />

  const lineGraph= <Line data={
      {
          labels: datalist.map(date=>{return date.reportDate}),
          datasets: [{
            data: datalist.map((data) => data.confirmed.total),
            label: 'Infected',
            backgroundColor: 'rgb(199, 219, 20)',
            borderColor: 'rgb(199, 219, 20)',
            fill: true,
          }, {
            data: datalist.map((data) => data.recovered.total),
            label: 'Recoverd',
            borderColor: '#64ed6f',
            backgroundColor: '#64ed6f',
            fill: true,
          },
          {
            data: datalist.map((data) => data.deaths.total),
            label: 'Deaths',
            borderColor: 'f30000',
            backgroundColor: '#f30000',
            fill: true,
          }
          ],
      }
      } />

    return (
    <Grid container spacing={3} justify="center">
        <Grid item xs={8}>
            {!country ||country=="Global" ? lineGraph : barD}
        </Grid>

    </Grid>
    )
}

export default Charts
