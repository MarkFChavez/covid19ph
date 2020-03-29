import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const COUNTRY_CODE = "PH";
const START_OF_YEAR = new Date(new Date().getFullYear(), 2, 1).toISOString().split('T')[0];
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);
const CURRENT_DATE = currentDate.toISOString().split('T')[0];
const API_URL = `https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${COUNTRY_CODE}&startDate=${START_OF_YEAR}&endDate=${CURRENT_DATE}`;

function GraphDashboard() {
  const [historical, setHistorical] = useState(null);

  useEffect(() => {
    fetch(API_URL).
      then(response => response.json()).
      then((countries) => {
        const labels = countries.map(countryData => new Date(countryData.last_updated).toISOString().split('T')[0])
        const confirmedCases = countries.map(countryData => countryData.total_confirmed)
        const deathCases = countries.map(countryData => countryData.total_deaths)
        const recoveredCases = countries.map(countryData => countryData.total_recovered)

        setHistorical({
          ...historical,
          labels: labels,
          datasets: [{
            label: 'Confirmed',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'orange',
            steppedLine: true,
            borderColor: 'orange',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'orange',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: confirmedCases,
          }, {
            label: 'Deaths',
            fill: false,
            lineTension: 0.1,
            steppedLine: true,
            backgroundColor: 'red',
            borderColor: 'red',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'red',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: deathCases,
          }, {
            label: 'Recovered',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'green',
            borderColor: 'green',
            borderCapStyle: 'butt',
            steppedLine: true,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'green',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: recoveredCases,
          }]
        })
      })
  }, [])

  return (
    <div className='min-h-screen flex-1 flex flex-col justify-between border-4 border-black bg-gray-100'>
      <div className='px-8 py-4'>
        <span className='text-4xl'> COVID-19 PH </span>
      </div>

      <div className='flex-grow'>
        <div className='p-8'>
          <Line data={historical} />
        </div>
      </div>
    </div>
  )
}

export default GraphDashboard;
