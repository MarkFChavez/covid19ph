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
      <div className='flex-grow flex justify-center items-center bg-gray-100 border-l-4 border-black'> 
        <div className='text-center'>
          <span className='text-6xl'> {confirmedCases} </span>
          <span className='block uppercase'> confirmed </span>
        </div>
      </div>

      <div className='flex-grow flex justify-center items-center bg-gray-300 border-l-4 border-black'> 
        <div className='text-center'>
          <span className='text-6xl'> {deathCases} </span>
          <span className='block uppercase'> deaths </span>
        </div>
      </div>

      <div className='flex-grow flex justify-center items-center bg-gray-100 border-l-4 border-black'> 
        <div className='text-center'>
          <span className='text-6xl'> {recoveredCases} </span>
          <span className='block uppercase'> recovered </span>
        </div>
      </div>
    </div>
  )
}

export default NumbersDashboard;
