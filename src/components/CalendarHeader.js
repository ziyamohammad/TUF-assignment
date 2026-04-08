import React from "react";
import styles from "../css/calendar.module.css";

const CalendarHeader = ({ currentDate, setCurrentDate }) => {
  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  return (
    <div className={styles.header}>
      <button onClick={() => changeMonth(-1)}>←</button>
      <h3>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h3>
      <button onClick={() => changeMonth(1)}>→</button>
    </div>
  );
};

export default CalendarHeader;