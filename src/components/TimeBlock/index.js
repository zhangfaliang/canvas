import React, { useRef, useEffect } from 'react';
import styles from './index.module.scss';

const TimeBlockCanVas = () => {
  const useCanvas = useRef(null);
  useEffect(() => {
    const canvas = useCanvas.current;
    const ctx = canvas.getContext('2d');
    new Array(500).fill(0).forEach((item, index) => {
      ctx.fillStyle = index % 2 === 0 ? '#ece6e6' : '#Fff';
      ctx.fillRect(0, 40 * index, 20000, 40);
    });
  });
  const handleScroll = e => {
    console.log(e);
  };
  return (
    <div className={styles.wrapper}>
      <canvas
        height="20000px"
        width="10000px"
        onScroll={handleScroll}
        ref={useCanvas}
      ></canvas>
    </div>
  );
};

export default TimeBlockCanVas;
