import React from 'react';
import styles from './index.module.scss';
import usePersistentCanvas from '../../hooks/usePersistentCanvas';

const Canvas = () => {
  const [locations, setLocations, canvasRef] = usePersistentCanvas();

  function handleCanvasClick(e) {
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  }

  function handleClear() {
    setLocations([]);
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1));
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleUndo}>Undo</button>

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      />
    </div>
  );
};

export default Canvas;
