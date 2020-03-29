import React, { useState, useEffect } from 'react';

const API_URL = "https://api.coronatracker.com/v2/analytics/country"

function NumbersDashboard() {
  const [confirmedCases, setConfirmedCases] = useState(0);
  const [deathCases, setDeathCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);

  useEffect(() => {
    fetch(API_URL).
      then((response) => {
        return response.json();
      }).
      then((data) => {
        const phCases = data.find((country) => {
          if(country.countryCode == "PH") {
            return country
          }
        })

        setConfirmedCases(phCases.confirmed)
        setDeathCases(phCases.deaths)
        setRecoveredCases(phCases.recovered)
      })
  })

  return (
    <div className='min-h-screen w-1/3 flex flex-col justify-between'>
      <div className='flex-grow flex justify-center items-center bg-gray-100'> 
        <span className='text-6xl'> {confirmedCases} </span>
      </div>

      <div className='flex-grow flex justify-center items-center bg-blue-500'> 
        <span className='text-6xl'> {deathCases} </span>
      </div>

      <div className='flex-grow flex justify-center items-center bg-yellow-500'> 
        <span className='text-6xl'> {recoveredCases} </span>
      </div>
    </div>
  )
}

export default NumbersDashboard;
