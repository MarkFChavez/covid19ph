import React from 'react';

import GraphDashboard from './components/GraphDashboard';
import NumbersDashboard from './components/NumbersDashboard';

function App() {
  return (
    <div className='flex'>
      <GraphDashboard />
      <NumbersDashboard />
    </div>
  );
}

export default App;
