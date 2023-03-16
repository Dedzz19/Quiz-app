import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);

      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes => minutes + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
    </div>
  );
}

export default Timer;