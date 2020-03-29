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
  }, [])

  const formatNumber = (num) => (
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  )

  return (
    <div className='min-h-screen w-1/4 flex flex-col justify-between'>
      <div className='flex-grow flex justify-center items-center bg-orange-400 border-4 border-black cursor-pointer hover:bg-orange-500'> 
        <div className='text-center'>
          <span className='text-6xl'> {formatNumber(confirmedCases)} </span>
          <span className='block uppercase'> confirmed </span>
        </div>
      </div>

      <div className='flex-grow flex justify-center items-center bg-red-400 border-4 border-black cursor-pointer hover:bg-red-500'> 
        <div className='text-center'>
          <span className='text-6xl'> {formatNumber(deathCases)} </span>
          <span className='block uppercase'> deaths </span>
        </div>
      </div>

      <div className='flex-grow flex justify-center items-center bg-green-400 border-4 border-black cursor-pointer hover:bg-green-500'> 
        <div className='text-center'>
          <span className='text-6xl'> {formatNumber(recoveredCases)} </span>
          <span className='block uppercase'> recovered </span>
        </div>
      </div>
    </div>
  )
}

export default NumbersDashboard;
