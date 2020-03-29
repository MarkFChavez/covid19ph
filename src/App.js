import React from 'react';

function App() {
  return (
    <div className='flex'>
      <div className='min-h-screen w-1/3 flex flex-col justify-between'>
        <div className='flex-grow flex justify-center items-center bg-red-500'> 
          <span className='text-5xl'> 1000 </span>
        </div>

        <div className='flex-grow flex justify-center items-center bg-blue-500'> 
          <span className='text-5xl'> 500 </span>
        </div>

        <div className='flex-grow flex justify-center items-center bg-yellow-500'> 
          <span className='text-5xl'> 250 </span>
        </div>
      </div>

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
