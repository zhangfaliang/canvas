import React, { Component, useState } from 'react';
// import Gantt from './components/Gantt';
// import Toolbar from './components/Toolbar/Toolbar';

import styles from './App.module.scss';

const data = {
  data: new Array(100).fill(100000).map((item, index) => ({
    id: index + 1,
    text: 'Task #1',
    start_date: `${index + (1 % 12)}-04-2019`,
    duration: 3,
    progress: 0.6
  })),

  links: [{ id: 1, source: 1, target: 2, type: '0' }]
};
const App = () => {
  const [currentZoom, setCurrentZoom] = useState('Days');
  const handleZoomChange = zoom => {
    setCurrentZoom(zoom);
  };
  return (
    <div className={styles.wrapper}>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          alert(e.clientX);
        }}
      />
      {/* <div className="zoom-bar">
        <Toolbar zoom={currentZoom} onZoomChange={handleZoomChange} />
      </div>
      <div className="gantt-container">
        <Gantt tasks={data} />
      </div> */}
    </div>
  );
};
export default App;
