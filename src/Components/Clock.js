import React, { useEffect, useState } from "react";

const Clock = () => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const [currentTime, setCurrentTime] = useState(time);
  const [currentDate, setCurrentDate] = useState(date);

  const timeUpdate = () => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    setCurrentDate(date);
    setCurrentTime(time);
  };

  useEffect(() => {
    setInterval(timeUpdate, 1000);
  }, []);
  return (
    <>
      <h1 className="title">Digital Clock</h1>
      <section className="clock">
        <h1 className="time">{currentTime}</h1>
        <h1 className="date">{currentDate}</h1>
      </section>
    </>
  );
};

export default Clock;
