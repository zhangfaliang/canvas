import React, { Component, useState } from 'react';
import Canvas from './components/Canvas';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas />
    </div>
  );
};
export default App;
