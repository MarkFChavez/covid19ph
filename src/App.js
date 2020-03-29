import React from 'react';

import NumbersDashboard from './components/NumbersDashboard';

function App() {
  return (
    <div className='flex'>
      <NumbersDashboard />

      <div className='min-h-screen flex-1 flex flex-col justify-between'>
        <div className='bg-purple-500 text-center'>
          <span className='text-4xl'> COVID-19 PH </span>
        </div>

        <div className='flex-grow'>
          tweets here
        </div>
      </div>
    </div>
  );
}

export default App;
