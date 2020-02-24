import React, { Component, useState } from 'react';
import Canvas from './components/Canvas';
import TimeBlockCanVas from './components/TimeBlock';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <TimeBlockCanVas />
    </div>
  );
};
export default App;
