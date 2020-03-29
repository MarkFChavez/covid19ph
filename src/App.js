import React from 'react';

import GraphDashboard from './components/GraphDashboard';
import NumbersDashboard from './components/NumbersDashboard';

function App() {
  return (
    <div className='flex'>
      <NumbersDashboard />
      <GraphDashboard />
    </div>
  );
}

export default App;
