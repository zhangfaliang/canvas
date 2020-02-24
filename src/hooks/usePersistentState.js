import React from 'react';

function usePersistentState(init) {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem('draw-app')) || init
  );
  React.useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(value));
  });
  return [value, setValue];
}

export default usePersistentState;
