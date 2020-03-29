import React, { useState, useEffect } from 'react';

const COUNTRY_CODE = "PH";
const START_OF_YEAR = new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const API_URL = `https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${COUNTRY_CODE}&startDate=${START_OF_YEAR}&endDate=${CURRENT_DATE}`;

function GraphDashboard() {
  const [historical, setHistorical] = useState(null);

  useEffect(() => {
    fetch(API_URL).
      then(response => response.json()).
      then((data) => {
        setHistorical(data)
        console.log(data)
      })
  })

  return (
    <div className='min-h-screen flex-1 flex flex-col justify-between'>
      <div>
        <span className='text-4xl'> COVID-19 PH </span>
      </div>

      <div className='flex-grow'>
      </div>
    </div>
  )
}

export default GraphDashboard;
